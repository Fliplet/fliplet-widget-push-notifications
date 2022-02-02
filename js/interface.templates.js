this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.loading"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"spinner-holder animated\">\r\n  <div class=\"spinner-overlay\">Loading...</div>\r\n  <p>Loading...</p>\r\n</div>\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.newNotification"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div id=\"notification-form\">\r\n  <div class=\"container-fluid\" id=\"notification-send-step-1\">\r\n    <h2 class=\"lead text-center\" style=\"margin-top: 1em;\"><span class=\"hidden\">Step 1: </span>Configure your notification</h2>\r\n    <div class=\"row\">\r\n      <input type=\"hidden\" id=\"notification_id\" name=\"notification_id\" />\r\n      <div class=\"col-sm-9 col-sm-offset-1\">\r\n        <div class=\"form-group clearfix\">\r\n          <input type=\"text\" class=\"form-control\" name=\"notification_title\" placeholder=\"Enter notification title\" id=\"notification_title\" data-count-selector=\"#title-count\" required/>\r\n          <div class=\"pull-right text-muted text-success countlabel\"><span id=\"title-count\">50</span> character(s) left</div>\r\n          <div class=\"text-danger notification_title_error hidden\">Please enter a notification title</div>\r\n        </div>\r\n        <div class=\"form-group clearfix\">\r\n          <textarea class=\"form-control\" rows=\"4\" name=\"notification_message\" id=\"notification_message\" placeholder=\"Enter notification message (15 words recommended)\" data-count-selector=\"#message-count\" required></textarea>\r\n          <div class=\"pull-right text-muted text-success countlabel\"><span id=\"message-count\">235</span> character(s) left</div>\r\n          <div class=\"text-danger notification_message_error hidden\">Please enter a notification message</div>\r\n        </div>\r\n        <div class=\"form-group clearfix\">\r\n          <div class=\"checkbox checkbox-icon\">\r\n            <input type=\"checkbox\" id=\"show_link_provider\" value=\"on\">\r\n            <label for=\"show_link_provider\">\r\n              <span class=\"check\"><i class=\"fa fa-check\"></i></span> Redirect users to a screen when they open the notification\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"row hidden link-provider-holder\">\r\n          <div class=\"col-xs-7\" id=\"link-provider\"></div>\r\n          <div class=\"col-xs-5 preview-btn-holder\">\r\n            <a class=\"btn btn-secondary preview-target-screen\" href=\"#\">Preview target screen</a>\r\n            <p class=\"text-danger text-center screen-error hidden\">Please select a screen</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group clearfix hidden\">\r\n          <div class=\"checkbox checkbox-icon\">\r\n            <input type=\"checkbox\" id=\"send_notification\" value=\"on\" checked>\r\n            <label for=\"send_notification\">\r\n              <span class=\"check\"><i class=\"fa fa-check\"></i></span> Send the notification to the in-app notification inbox\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"alert alert-warning\">The <strong>Notification Inbox</strong> component must be added to a screen for your users to see the notifications.</div>\r\n        <div class=\"form-group clearfix\">\r\n          <p><label class=\"contorl-label\">Status</label></p>\r\n          <div class=\"radio radio-icon\">\r\n            <input type=\"radio\" id=\"notification_status_draft\" name=\"notification_status\" value=\"draft\" checked>\r\n            <label for=\"notification_status_draft\">\r\n              <span class=\"check\"><i class=\"fa fa-circle\"></i></span> Draft\r\n            </label>\r\n          </div>\r\n          <div class=\"radio radio-icon\">\r\n            <input type=\"radio\" id=\"notification_status_published\" name=\"notification_status\" value=\"published\">\r\n            <label for=\"notification_status_published\">\r\n              <span class=\"check\"><i class=\"fa fa-circle\"></i></span> Published\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group clearfix hidden\" id=\"push_notification_form_group\">\r\n          <div class=\"checkbox checkbox-icon\">\r\n            <input type=\"checkbox\" id=\"send_push_notification\" value=\"on\">\r\n            <label for=\"send_push_notification\">\r\n              <span class=\"check\"><i class=\"fa fa-check\"></i></span> Also send a push notification to the devices\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-8 col-xs-offset-2 text-center\">\r\n        <div id=\"subscription-note\" class=\"hidden push-only\">\r\n          <p>Up to <strong><span id=\"subscriptions\">x</span></strong> registered device(s) will receive this notification. To test push notifications with individual devices, <a href=\"#\" class=\"enter-subscription-ids\">enter subscription IDs</a> for each device.</p>\r\n          <div id=\"target-subscription-ids\" class=\"hidden\">\r\n            <label>Subscription IDs</label>\r\n            <div class=\"help-block\"><small>To find your subscription ID, go to <strong>About this app</strong> in the app on your device.</small></div>\r\n            <input type=\"text\" class=\"form-control\" id=\"subscription-ids\" placeholder=\"Separate multiple IDs with commas\" />\r\n          </div>\r\n        </div>\r\n        <p>\r\n          <a class=\"btn btn-primary notification-send\" href=\"#\">Review &amp; send notification</a>\r\n          <a class=\"btn btn-secondary notification-cancel\" href=\"#\">Cancel</a>\r\n        </p>\r\n        <div class=\"progress notification-summary-sending\">\r\n          <div class=\"progress-bar progress-bar-success progress-bar-striped\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"hidden notifications-preview\">\r\n      <h4 class=\"text-center\">Your notification</h4>\r\n      <div class=\"text-center notification-message\"></div>\r\n      <div class=\"push-notification-preview\">\r\n        <hr />\r\n        <h4 class=\"text-center\">A push notification will also be sent</h4>\r\n        <p class=\"text-center\"><small class=\"text-info\">Appearance of the notification is subject to users' device, preference and accepting to receive notifications.</small></p>\r\n        <div class=\"visible-sm-block visible-md-block visible-lg-block message-empty\" id=\"notification-message-preview\">\r\n          <img src=\""
    + alias3((helpers.asset || (depth0 && depth0.asset) || alias2).call(alias1,"img/notifications_device_preview_empty.jpg",{"name":"asset","hash":{},"data":data}))
    + "\" />\r\n          <div id=\"notification-preview-home\">\r\n            <img class=\"app-icon-preview\" src=\""
    + alias3((helpers.asset || (depth0 && depth0.asset) || alias2).call(alias1,"img/app-icon.png",{"name":"asset","hash":{},"data":data}))
    + "\" />\r\n            <strong class=\"app-name\"></strong>\r\n            <span class=\"notification-message\"></span>\r\n          </div>\r\n          <div id=\"notification-preview-icon-home\">\r\n            <img class=\"app-icon-preview\" src=\""
    + alias3((helpers.asset || (depth0 && depth0.asset) || alias2).call(alias1,"img/app-icon.png",{"name":"asset","hash":{},"data":data}))
    + "\" />\r\n            <strong class=\"app-name\"></strong>\r\n          </div>\r\n          <div id=\"notification-preview-lockscreen\">\r\n            <img class=\"app-icon-preview\" src=\""
    + alias3((helpers.asset || (depth0 && depth0.asset) || alias2).call(alias1,"img/app-icon.png",{"name":"asset","hash":{},"data":data}))
    + "\" />\r\n            <strong class=\"app-name\"></strong>\r\n            <span class=\"notification-message\"></span>\r\n          </div>\r\n          <div id=\"notification-preview-notification-center\">\r\n            <img class=\"app-icon-preview\" src=\""
    + alias3((helpers.asset || (depth0 && depth0.asset) || alias2).call(alias1,"img/app-icon.png",{"name":"asset","hash":{},"data":data}))
    + "\" />\r\n            <strong class=\"app-name\"></strong>\r\n            <span class=\"notification-message\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"visible-xs-block\"><img src=\""
    + alias3((helpers.asset || (depth0 && depth0.asset) || alias2).call(alias1,"img/notifications_device_preview_mock.jpg",{"name":"asset","hash":{},"data":data}))
    + "\" /></div>\r\n        <h4 class=\"text-warning text-center\">Push notifications will be sent to <strong><span class=\"subscriptions-count\"></span></strong> registered devices.</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.newPushNotification"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3=container.escapeExpression;

  return "<div id=\"push-notification-form\">\r\n  <div class=\"container-fluid\" id=\"notification-send-step-1\">\r\n    <h2 class=\"lead text-center\" style=\"margin-top: 1em;\"><span class=\"hidden\">Step 1: </span>Configure your push notification</h2>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-9 col-sm-offset-1\">\r\n        <div class=\"form-group clearfix\">\r\n          <input type=\"text\" class=\"form-control\" name=\"push_notification_title\" placeholder=\"Enter notification title\" id=\"push_notification_title\" data-count-selector=\"#push-title-count\" required/>\r\n          <div class=\"pull-right text-muted text-success countlabel\"><span id=\"push-title-count\"></span> character(s) left</div>\r\n          <div class=\"text-danger push_notification_title_error hidden\">Please enter a push notification title</div>\r\n        </div>\r\n        <div class=\"form-group clearfix\">\r\n          <textarea class=\"form-control\" rows=\"4\" name=\"push_notification_message\" id=\"push_notification_message\" placeholder=\"Enter notification message (15 words recommended)\" data-count-selector=\"#push-message-count\" required></textarea>\r\n          <div class=\"pull-right text-muted text-success countlabel\"><span id=\"push-message-count\"></span> character(s) left</div>\r\n          <div class=\"text-danger push_notification_message_error hidden\">Please enter a push notification message</div>\r\n        </div>\r\n        <div class=\"form-group clearfix\">\r\n          <div class=\"checkbox checkbox-icon\">\r\n            <input type=\"checkbox\" id=\"push_show_link_provider\" value=\"on\">\r\n            <label for=\"push_show_link_provider\">\r\n              <span class=\"check\"><i class=\"fa fa-check\"></i></span> Redirect users to a screen when they open the push notification\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"row hidden link-provider-holder\">\r\n          <div class=\"col-xs-7\" id=\"push-link-provider\"></div>\r\n          <div class=\"col-xs-5 preview-btn-holder\">\r\n            <a class=\"btn btn-secondary push-preview-target-screen\" href=\"#\">Preview target screen</a>\r\n            <p class=\"text-danger text-center push-screen-error hidden\">Please select a screen</p>\r\n          </div>\r\n        </div>\r\n        <div id=\"push-notification-badge-increment\" class=\"hidden\">\r\n          <span id=\"push-notification-badge-icon\" class=\"checked\"><img class=\"app-icon-preview\" src=\""
    + alias3((helpers.asset || (depth0 && depth0.asset) || alias2).call(alias1,"img/app-icon.png",{"name":"asset","hash":{},"data":data}))
    + "\" /><label for=\"push_notification_badge\">+1</label></span>\r\n          <div id=\"notification-badge-label\"><label for=\"push_notification_badge\">Increase app icon badge by 1<br>(available for iOS devices only)</label></div>\r\n          <input type=\"checkbox\" name=\"push_notification_badge\" id=\"push_notification_badge\" checked class=\"bootstrap-switch\" data-on-text=\"Yes\" data-on-color=\"primary\" data-off-text=\"No\" data-off-color=\"default\" data-size=\"small\" class=\"pull-right\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"hidden\">\r\n    <!-- SCHEDULED NOTIFICATION -->\r\n    <h2 class=\"lead text-center\" style=\"margin-top: 1em;\">Step 2: Schedule notification</h2>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-8 col-xs-offset-2 text-center\">\r\n        <div class=\"form-group clearfix inline-radio\">\r\n          <div class=\"radio-buttons clearfix\">\r\n            <div class=\"radio radio-icon\">\r\n              <input type=\"radio\" id=\"enable-yes\" name=\"enable_option\" value=\"show\">\r\n              <label for=\"enable-yes\">Send my notification now</label>\r\n            </div>\r\n            <div class=\"radio radio-icon\">\r\n              <input type=\"radio\" id=\"enable-no\" name=\"enable_option\" value=\"no-show\">\r\n              <label for=\"enable-no\">Schedule for later</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- END: SCHEDULED NOTIFICATION -->\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-8 col-xs-offset-2 text-center\">\r\n        <div id=\"push-subscription-note\" class=\"toHide\"><p>Up to <strong><span id=\"push-subscriptions\">x</span></strong> registered device(s) will receive this notification. To test push notifications with individual devices, <a href=\"#\" class=\"enter-subscription-ids\">enter subscription IDs</a> for each device.</p></div>\r\n        <div id=\"target-push-subscription-ids\" class=\"hidden\">\r\n          <label>Subscription IDs</label>\r\n          <div class=\"help-block\"><small>To find your subscription ID, go to <strong>About this app</strong> in the app on your device.</small></div>\r\n          <input type=\"text\" class=\"form-control\" id=\"push-subscription-ids\" placeholder=\"Separate multiple IDs with commas\" />\r\n        </div>\r\n        <p>\r\n          <a class=\"btn btn-primary notification-send\" href=\"#\">Review &amp; send notification</a>\r\n          <a class=\"btn btn-secondary notification-cancel\" href=\"#\">Cancel</a>\r\n        </p>\r\n        <div class=\"progress notification-summary-sending\">\r\n          <div class=\"progress-bar progress-bar-success progress-bar-striped\"></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"hidden notifications-preview\">\r\n      <p class=\"text-center\"><small class=\"text-info\">Appearance of the notification is subject to users' device, preference and accepting to receive notifications.</small></p>\r\n      <div class=\"visible-sm-block visible-md-block visible-lg-block message-empty\" id=\"push-notification-message-preview\">\r\n        <img src=\""
    + alias3((helpers.asset || (depth0 && depth0.asset) || alias2).call(alias1,"img/notifications_device_preview_empty.jpg",{"name":"asset","hash":{},"data":data}))
    + "\" />\r\n        <div id=\"notification-preview-home\">\r\n          <img class=\"app-icon-preview\" src=\""
    + alias3((helpers.asset || (depth0 && depth0.asset) || alias2).call(alias1,"img/app-icon.png",{"name":"asset","hash":{},"data":data}))
    + "\" />\r\n          <strong class=\"app-name\"></strong>\r\n          <span class=\"notification-message\"></span>\r\n        </div>\r\n        <div id=\"notification-preview-icon-home\">\r\n          <img class=\"app-icon-preview\" src=\""
    + alias3((helpers.asset || (depth0 && depth0.asset) || alias2).call(alias1,"img/app-icon.png",{"name":"asset","hash":{},"data":data}))
    + "\" />\r\n          <strong class=\"app-name\"></strong>\r\n        </div>\r\n        <div id=\"notification-preview-lockscreen\">\r\n          <img class=\"app-icon-preview\" src=\""
    + alias3((helpers.asset || (depth0 && depth0.asset) || alias2).call(alias1,"img/app-icon.png",{"name":"asset","hash":{},"data":data}))
    + "\" />\r\n          <strong class=\"app-name\"></strong>\r\n          <span class=\"notification-message\"></span>\r\n        </div>\r\n        <div id=\"notification-preview-notification-center\">\r\n          <img class=\"app-icon-preview\" src=\""
    + alias3((helpers.asset || (depth0 && depth0.asset) || alias2).call(alias1,"img/app-icon.png",{"name":"asset","hash":{},"data":data}))
    + "\" />\r\n          <strong class=\"app-name\"></strong>\r\n          <span class=\"notification-message\"></span>\r\n        </div>\r\n      </div>\r\n      <div class=\"visible-xs-block\"><img src=\""
    + alias3((helpers.asset || (depth0 && depth0.asset) || alias2).call(alias1,"img/notifications_device_preview_mock.jpg",{"name":"asset","hash":{},"data":data}))
    + "\" /></div>\r\n      <h4 class=\"text-warning text-center\">Your are about to send push notifications to <strong><span class=\"subscriptions-count\"></span></strong> registered device(s).<br>Are you sure?</h4>\r\n    </div>\r\n  </div>\r\n  <div id=\"notification-send-step-2\" class=\"hidden\">\r\n    <p class=\"lead text-center\" style=\"margin-bottom: 1em;\"><strong class=\"text-primary\">Step 2:</strong> When do you want your users to see the notification?</p>\r\n    <div>\r\n      <ul class=\"nav nav-pills text-center\" id=\"push-schedule-options\">\r\n        <li data-option=\"asap\" class=\"active\"><a href=\"#notification-asap\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-ok-sign\"></span> ASAP</a></li>\r\n        <li data-option=\"scheduled\"><a href=\"#notification-scheduled\" data-toggle=\"tab\"><span class=\"glyphicon glyphicon-ok-sign\"></span> Schedule for later</a></li>\r\n      </ul>\r\n\r\n      <div class=\"tab-content\">\r\n        <div class=\"tab-pane active\" id=\"notification-asap\"></div>\r\n        <div class=\"tab-pane\" id=\"notification-scheduled\">\r\n          <div class=\"form-group\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12\">\r\n                <p class=\"lead text-center\" style=\"margin-top:20px;margin-bottom:10px;\">Pick a date and time below</p>\r\n              </div>\r\n              <div class=\"col-sm-8\">\r\n                <div id=\"pushDatetimepicker\"><input type=\"datetime\" class=\"hidden\" name=\"notification_datetime\" id=\"notification_datetime\" /></div>\r\n              </div>\r\n              <div class=\"col-sm-4 text-center\" style=\"padding-top: 80px;\">\r\n                <div class=\"btn-group-vertical\">\r\n                  <input type=\"radio\" class=\"hidden\" name=\"push_notification_timezone\" id=\"push_notification_timezone_local\" value=\"local\" checked />\r\n                  <input type=\"radio\" class=\"hidden\" name=\"push_notification_timezone\" id=\"push_notification_timezone_gmt\" value=\"gmt\" />\r\n                  <label class=\"btn btn-default\" for=\"push_notification_timezone_local\" id=\"push_notification_timezone_local_label\"><span class=\"glyphicon glyphicon-ok-sign\"></span> Local to user's timezone</label>\r\n                  <label class=\"btn btn-default\" for=\"push_notification_timezone_gmt\" id=\"push_notification_timezone_gmt_label\"><span class=\"glyphicon glyphicon-ok-sign\"></span> GMT</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.noNotifications"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p><a class=\"btn btn-primary\" data-action=\"new-notification\" href=\"#\">New notification</a></p>\r\n<div class=\"alert alert-info\">No notifications found.</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.noPushNotifications"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p><a class=\"btn btn-primary\" data-action=\"new-notification\" href=\"#\">New push notification</a></p>\r\n<div class=\"alert alert-info\">No push notifications found.</div>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.notificationEntries"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#each this}}\r\n  <tr data-status=\"{{status}}\" data-id=\"{{id}}\">\r\n    <td><span title=\"{{moment createdAt format=\"MMM Do YYYY, HH:mm\"}}\">{{moment createdAt calendar=null}}</span></td>\r\n    <td><strong>{{data.title}}</strong>{{#and data.title data.message}}<br>{{/and}}{{data.message}}{{#if scope}}<br><br><i><strong>Custom filters:</strong></i> {{scope.length}} (<a href=\"#\" data-show-scope>more info</a>){{/if}}</td>\r\n    <td>{{statusText}}</td>\r\n    <td>{{#compare status \"===\" \"published\"}}<span title=\"{{moment orderAt format=\"MMM Do YYYY, HH:mm\"}}\">{{moment orderAt calendar=null}}</span>{{else}}{{/compare}}</td>\r\n    {{#if pushNotificationPayload}}\r\n    <td class=\"hidden\">{{#or pushNotificationPayload.title pushNotificationPayload.message}}<i class=\"fa fa-fw fa-lg fa-check\"></i>{{/or}}</td>\r\n    {{else}}\r\n    <td class=\"hidden\"></td>\r\n    {{/if}}\r\n    {{#unless isDeleted}}\r\n    <td><a href=\"#\" data-action=\"edit\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Edit\"><i class=\"fa fa-fw fa-lg fa-pencil\"></i></a> <a class=\"hidden\" href=\"#\" data-action=\"clone\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Copy as new draft\"><i class=\"fa fa-fw fa-lg fa-clone\"></i></a> <a href=\"#\" data-action=\"delete\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Delete\"><i class=\"fa fa-fw fa-lg fa-trash\"></i></a></td>\r\n    {{else}}\r\n    <td><a class=\"hidden\" href=\"#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Copy as new draft\"><i class=\"fa fa-fw fa-lg fa-clone\"></i></a></td>\r\n    {{/unless}}\r\n  </tr>\r\n{{/each}}";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.notificationLog"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<p><strong>Errors</strong><br>\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.errors : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</p>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<span class=\"label label-warning\">"
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "</span> ("
    + alias4(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"count","hash":{},"data":data}) : helper)))
    + ") "
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + ((stack1 = helpers.unless.call(alias1,(data && data.last),{"name":"unless","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "<br>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "<p><strong>N<sup>o</sup> devices (iOS/Android/Web)</strong><br>\r\n("
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.ios : depth0)) != null ? stack1.count : stack1), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.android : depth0)) != null ? stack1.count : stack1), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.web : depth0)) != null ? stack1.count : stack1), depth0))
    + ")</p>\r\n<p><strong>Accepted for delivery</strong><br>\r\n"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.accepted : depth0)) != null ? stack1.count : stack1), depth0))
    + " ("
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.accepted : depth0)) != null ? stack1.percent : stack1), depth0))
    + "%)</p>\r\n<p><strong>Batches (Sent/Total)</strong><br>\r\n"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.batches : depth0)) != null ? stack1.sent : stack1), depth0))
    + "/"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.batches : depth0)) != null ? stack1.total : stack1), depth0))
    + "</p>\r\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.errors : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.notifications"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p><a class=\"btn btn-primary\" data-action=\"new-notification\" href=\"#\">New notification</a></p>\r\n<table>\r\n  <thead>\r\n    <tr>\r\n      <th width=\"180\">Created at</th>\r\n      <th>Notification</th>\r\n      <th width=\"100\">Status</th>\r\n      <th width=\"180\">Published at</th>\r\n      <th width=\"100\" class=\"hidden\">Sent as push notification</th>\r\n      <th width=\"100\">&nbsp;</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n  {{> notificationEntries}}\r\n  </tbody>\r\n</table>\r\n<p class=\"text-center\"><a href=\"#\" data-load-more>Load more</a></p>";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.pushNotificationEntries"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "{{#each jobs}}\r\n<div class=\"row report-wrapper\">\r\n  <div class=\"col-xs-9\">\r\n    <div>\r\n      <p class=\"report-notification-title\">{{title}}</p>\r\n      <p class=\"report-notification-message\">{{message}}</p>\r\n      {{#if screenName}}\r\n        <p class=\"report-notification-screen\"><strong>Target screen:</strong> {{screenName}}</p>\r\n      {{/if}}\r\n      <div class=\"more-details\">\r\n        {{#if errorsDescription}}\r\n          <a href=\"#\">See more details and the <strong>errors reported</strong></a>\r\n        {{else}}\r\n          <a href=\"#\">See more details</a>\r\n        {{/if}}\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-3\">\r\n    <div class=\"report-status report-notification-scheduled hidden\">\r\n      <div class=\"date-info\">\r\n        <i class=\"fa fa-calendar-check-o fa-fw\"></i>\r\n        <div><strong>Scheduled on</strong></div>\r\n        <div><span class=\"notification-scheduled-date\"></span></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"report-status report-notification-sent\">\r\n      <div class=\"date-info\">\r\n        <i class=\"fa fa-paper-plane fa-fw\"></i>\r\n        <div><strong>Sent on</strong></div>\r\n        <div><span class=\"notification-scheduled-date\">{{createdAt}}</span></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"report-status report-notification-tobe hidden\">\r\n      <div class=\"date-info\">\r\n        <i class=\"fa fa-clock-o fa-fw\"></i>\r\n        <div><strong>To be sent on</strong></div>\r\n        <div><span class=\"notification-scheduled-date\"></span></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-12\">\r\n    <div class=\"report-other-details\">\r\n      <div class=\"report-recipients\">\r\n        <p>N<sup>o</sup> Recipients (iOS/Android/Win10) <span class=\"question-icon\" data-toggle=\"tooltip\" data-placement=\"auto bottom\" title=\"Number of devices that registered top receive push notification from the app.\"><i class=\"fa fa-question-circle\"></i></span></p>\r\n        <p class=\"report-recipients-data\">{{recipientsCount}} ({{sentApple}}/{{sentGoogle}}/{{sentWindows}})</p>\r\n      </div>\r\n      <div class=\"report-delivery\">\r\n        <p>Accepted for delivery <span class=\"question-icon\" data-toggle=\"tooltip\" data-placement=\"auto bottom\" title=\"Number of push notification requests accepted by Apple/Google/Microsoft to deliver to the devices. Push notification requests may be rejected if the device registered is no longer valid.\"><i class=\"fa fa-question-circle\"></i></span></p>\r\n        <p class=\"report-delivery-data\">{{deliveredCount}} ({{deliveryPerct}}%)</p>\r\n      </div>\r\n      <div class=\"report-batch\">\r\n        <p>Batches (Sent/Total) <span class=\"question-icon\" data-toggle=\"tooltip\" data-placement=\"auto left\" title=\"Fliplet sends the push notifications to Apple/Google/Microsoft in batches. This shows the number of batches that have been processed and sent.\"><i class=\"fa fa-question-circle\"></i></span></p>\r\n        <p class=\"report-batch-data\">{{batchesSent}}/{{batchesCount}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  {{#if errorsDescription}}\r\n    <div class=\"col-xs-12 report-errors\">\r\n      <div>\r\n        <h3>Errors reported:</h3>\r\n        <p>{{{ errorsDescription }}}</p>\r\n      </div>\r\n    </div>\r\n  {{/if}}\r\n</div>\r\n{{/each}}\r\n";
},"useData":true});

this["Fliplet"]["Widget"]["Templates"]["templates.pushNotifications"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p><a class=\"btn btn-primary\" data-action=\"new-notification\" href=\"#\">New push notification</a></p>\r\n<div class=\"reports-holder\">\r\n  {{> pushNotificationEntries}}\r\n</div>\r\n<p class=\"text-center\"><a href=\"#\" data-load-more>Load more</a></p>";
},"useData":true});