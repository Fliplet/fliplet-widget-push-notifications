export const filterTypes = [
  {
    name: 'equals',
    label: 'Equals',
    labelVerbose: 'is equal to'
  },
  {
    name: 'notequal',
    label: 'Not equal',
    labelVerbose: 'is not equal to'
  },
  {
    name: 'oneof',
    label: 'Is one of',
    labelVerbose: 'is one of'
  },
  {
    name: 'notoneof',
    label: 'Is not one of',
    labelVerbose: 'is not one of'
  },
  {
    name: 'contains',
    label: 'Contains',
    labelVerbose: 'contains'
  },
  {
    name: 'notcontain',
    label: 'Does not contain',
    labelVerbose: 'does not contain'
  },
  {
    name: 'empty',
    label: 'Is empty',
    labelVerbose: 'is empty'
  },
  {
    name: 'notempty',
    label: 'Is not empty',
    labelVerbose: 'is not empty'
  }
  // {
  //   name: 'gt',
  //   label: 'Greater than',
  //   labelVerbose: 'is greater than'
  // },
  // {
  //   name: 'gte',
  //   label: 'Greater than or equal to',
  //   labelVerbose: 'is greater than or equal to'
  // },
  // {
  //   name: 'lt',
  //   label: 'Less than',
  //   labelVerbose: 'is less than'
  // },
  // {
  //   name: 'lte',
  //   label: 'Less than or equal to',
  //   labelVerbose: 'is less than or equal to'
  // }
];

export function getFilterScope(filter) {
  filter = filter || {};

  const column = filter.column;
  let value = filter.value;
  let path = filter.path;
  let scope = {};
  let result = scope;

  if (!column || (!value && ['empty', 'notempty'].indexOf(filter.condition) < 0)) {
    return;
  }

  if (['oneof', 'notoneof'].indexOf(filter.condition) > -1 && Fliplet.Utils.isEmpty(value)) {
    return;
  }

  if (path) {
    Fliplet.Utils.set(scope, column, {});
    scope = result[column];
  } else {
    path = column;
  }

  if (['oneof', 'notoneof'].indexOf(filter.condition) < 0 && Fliplet.Utils.isArray(value)) {
    value = value[0];
  }

  switch (filter.condition) {
    case 'equals': // Equals
      Fliplet.Utils.setWith(scope, path, { $iLike: value }, Object);
      break;
    case 'notequal': // Not equal
      Fliplet.Utils.setWith(scope, path, { $or: [
        { $eq: null },
        { $in: ['', '[]'] },
        { $ne: value }
      ] }, Object);
      break;
    case 'oneof': // Is one of
      if (!Fliplet.Utils.isArray(value)) {
        value = [value];
      }

      Fliplet.Utils.setWith(scope, path, { $in: value }, Object);
      break;
    case 'notoneof': // Is not one of
      if (!Fliplet.Utils.isArray(value)) {
        value = [value];
      }

      Fliplet.Utils.setWith(scope, path, { $or: [
        { $eq: null },
        { $in: ['', '[]'] },
        { $notIn: value }
      ] }, Object);
      break;
    case 'contains': // Contains
      Fliplet.Utils.setWith(scope, path, {
        $or: [
          { $iLike: { $any: [value] } },
          { $iLike: `%${value}%` }
        ]
      }, Object);
      break;
    case 'notcontain': // Does not contain
      Fliplet.Utils.setWith(scope, path, {
        $or: [
          { $eq: null },
          { $in: ['', '[]'] },
          {
            $and: [
              { $notILike: { $any: [value] } },
              { $notILike: `%${value}%` }
            ]
          }
        ]
      }, Object);
      break;
    case 'empty': // Is empty
      Fliplet.Utils.setWith(scope, path, {
        $or: [
          { $eq: null },
          { $in: ['', '[]'] }
        ]
      }, Object);
      break;
    case 'notempty': // Is not empty
      Fliplet.Utils.setWith(scope, path, {
        $and: [
          { $ne: null },
          { $notIn: ['', '[]'] }
        ]
      }, Object);
      break;
    case 'gt': // Greater than
      Fliplet.Utils.setWith(scope, path, { $gt: value }, Object);
      break;
    case 'gte': // Greater than or equal to
      Fliplet.Utils.setWith(scope, path, { $gte: value }, Object);
      break;
    case 'lt': // Less than
      Fliplet.Utils.setWith(scope, path, { $lt: value }, Object);
      break;
    case 'lte': // Less than or equal to
      Fliplet.Utils.setWith(scope, path, { $lte: value }, Object);
      break;
    default:
      scope = undefined;
      break;
  }

  return result;
}

export function getFilterVerbose(filter) {
  filter = filter || {};

  const condition = filter.condition;
  let column = filter.column;
  const path = filter.path;
  let value = filter.value;
  let verbose = '';

  if (!column || (!value && ['empty', 'notempty'].indexOf(filter.condition) < 0)) {
    return;
  }

  if (Fliplet.Utils.map(filterTypes, 'name').indexOf(condition) < 0) {
    return;
  }

  if (path) {
    column = `${column} (${path})`;
  }

  if (Fliplet.Utils.isArray(value)) {
    value = value.join(', ');
  }

  verbose = `${column} ${Fliplet.Utils.find(filterTypes, { name: condition }).labelVerbose}`;

  if (['empty', 'notempty'].indexOf(filter.condition) < 0) {
    verbose += ` ${value}`;
  }

  return verbose;
}
