(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{432:function(e,t,o){"use strict";o.r(t);var i=o(8),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"activity-and-workflow-retries"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#activity-and-workflow-retries"}},[e._v("#")]),e._v(" Activity and workflow retries")]),e._v(" "),o("p",[o("Term",{attrs:{term:"activity",show:"Activities"}}),e._v(" and "),o("Term",{attrs:{term:"workflow",show:"workflows"}}),e._v(" can fail due to various intermediate conditions. In those cases, we want\nto retry the failed "),o("Term",{attrs:{term:"activity"}}),e._v(" or child "),o("Term",{attrs:{term:"workflow"}}),e._v(" or even the parent "),o("Term",{attrs:{term:"workflow"}}),e._v(". This can be achieved\nby supplying an optional "),o("a",{attrs:{href:"https://www.javadoc.io/static/com.uber.cadence/cadence-client/2.7.9-alpha/com/uber/cadence/common/RetryOptions.Builder.html#setInitialInterval-java.time.Duration-",target:"_blank",rel:"noopener noreferrer"}},[e._v("retry options"),o("OutboundLink")],1),e._v(".")],1),e._v(" "),o("blockquote",[o("p",[e._v("Note that sometimes it's also referred as RetryPolicy")])]),e._v(" "),o("h2",{attrs:{id:"retryoptions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#retryoptions"}},[e._v("#")]),e._v(" RetryOptions")]),e._v(" "),o("p",[e._v("A RetryOptions includes the following.")]),e._v(" "),o("h3",{attrs:{id:"initialinterval"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#initialinterval"}},[e._v("#")]),e._v(" InitialInterval")]),e._v(" "),o("p",[e._v("Backoff interval for the first retry. If coefficient is 1.0 then it is used for all retries.\nRequired, no default value.")]),e._v(" "),o("h3",{attrs:{id:"backoffcoefficient"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#backoffcoefficient"}},[e._v("#")]),e._v(" BackoffCoefficient")]),e._v(" "),o("p",[e._v("Coefficient used to calculate the next retry backoff interval.\nThe next retry interval is previous interval multiplied by this coefficient.\nMust be 1 or larger. Default is 2.0.")]),e._v(" "),o("h3",{attrs:{id:"maximuminterval"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#maximuminterval"}},[e._v("#")]),e._v(" MaximumInterval")]),e._v(" "),o("p",[e._v("Maximum backoff interval between retries. Exponential backoff leads to interval increase.\nThis value is the cap of the interval. Default is 100x of initial interval.")]),e._v(" "),o("h3",{attrs:{id:"expirationinterval"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#expirationinterval"}},[e._v("#")]),e._v(" ExpirationInterval")]),e._v(" "),o("p",[e._v("Maximum time to retry. Either ExpirationInterval or MaximumAttempts is required.\nWhen exceeded the retries stop even if maximum retries is not reached yet.\nFirst (non-retry) attempt is unaffected by this field and is guaranteed to run\nfor the entirety of the workflow timeout duration (ExecutionStartToCloseTimeoutSeconds).")]),e._v(" "),o("h3",{attrs:{id:"maximumattempts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#maximumattempts"}},[e._v("#")]),e._v(" MaximumAttempts")]),e._v(" "),o("p",[e._v("Maximum number of attempts. When exceeded the retries stop even if not expired yet.\nIf not set or set to 0, it means unlimited, and relies on ExpirationInterval to stop.\nEither MaximumAttempts or ExpirationInterval is required.")]),e._v(" "),o("h3",{attrs:{id:"nonretriableerrorreasons-via-setdonotretry"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nonretriableerrorreasons-via-setdonotretry"}},[e._v("#")]),e._v(" NonRetriableErrorReasons(via setDoNotRetry)")]),e._v(" "),o("p",[e._v("Non-Retriable errors. This is optional. Cadence server will stop retry if error reason matches this list.\nWhen matching an exact match is used. So adding RuntimeException.class to this list is going to include only RuntimeException itself, not all of its subclasses. The reason for such behaviour is to be able to support server side retries without knowledge of Java exception hierarchy. When considering an exception type a cause of ActivityFailureException and ChildWorkflowFailureException is looked at.\nError and CancellationException are never retried and are not even passed to this filter.")]),e._v(" "),o("h2",{attrs:{id:"activity-timeout-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#activity-timeout-usage"}},[e._v("#")]),e._v(" Activity Timeout Usage")]),e._v(" "),o("p",[e._v("It's probably too complicated to learn how to set those timeouts by reading the above. There is an easy way to deal with it.")]),e._v(" "),o("p",[o("strong",[e._v("LocalActivity without retry")]),e._v(": Use ScheduleToClose for overall timeout")]),e._v(" "),o("p",[o("strong",[e._v("Regular Activity without retry")]),e._v(":")]),e._v(" "),o("ol",[o("li",[e._v("Use ScheduleToClose for overall timeout")]),e._v(" "),o("li",[e._v("Leave ScheduleToStart and StartToClose empty")]),e._v(" "),o("li",[e._v("If ScheduleToClose is too large(like 10 mins), then set Heartbeat timeout to a smaller value like 10s. Call heartbeat API inside activity regularly.")])]),e._v(" "),o("p",[o("strong",[e._v("LocalActivity with retry")]),e._v(":")]),e._v(" "),o("ol",[o("li",[e._v("Use ScheduleToClose as timeout of each attempt.")]),e._v(" "),o("li",[e._v("Use retryOptions.InitialInterval, retryOptions.BackoffCoefficient, retryOptions.MaximumInterval to control backoff.")]),e._v(" "),o("li",[e._v("Use retryOptions.ExperiationInterval as overall timeout of all attempts.")]),e._v(" "),o("li",[e._v("Leave retryOptions.MaximumAttempts empty.")])]),e._v(" "),o("p",[o("strong",[e._v("Regular Activity with retry")]),e._v(":")]),e._v(" "),o("ol",[o("li",[e._v("Use ScheduleToClose as timeout of each attempt")]),e._v(" "),o("li",[e._v("Leave ScheduleToStart and StartToClose empty")]),e._v(" "),o("li",[e._v("If ScheduleToClose is too large(like 10 mins), then set Heartbeat timeout to a smaller value like 10s. Call heartbeat API inside activity regularly.")]),e._v(" "),o("li",[e._v("Use retryOptions.InitialInterval, retryOptions.BackoffCoefficient, retryOptions.MaximumInterval to control backoff.")]),e._v(" "),o("li",[e._v("Use retryOptions.ExperiationInterval as overall timeout of all attempts.")]),e._v(" "),o("li",[e._v("Leave retryOptions.MaximumAttempts empty.")])]),e._v(" "),o("h2",{attrs:{id:"activity-timeout-internals"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#activity-timeout-internals"}},[e._v("#")]),e._v(" Activity Timeout Internals")]),e._v(" "),o("h3",{attrs:{id:"basics-without-retry"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basics-without-retry"}},[e._v("#")]),e._v(" Basics without Retry")]),e._v(" "),o("p",[e._v("Things are easier to understand in the world without retry. Because Cadence started from it.")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("ScheduleToClose timeout is the overall end-to-end timeout from a workflow's perspective.")])]),e._v(" "),o("li",[o("p",[e._v("ScheduleToStart timeout is the time that activity worker needed to start an activity. Exceeding this timeout, activity will return an ScheduleToStart timeout error/exception to workflow")])]),e._v(" "),o("li",[o("p",[e._v("StartToClose timeout is the time that an activity needed to run. Exceeding this will return\nStartToClose to workflow.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Requirement and defaults:")])]),e._v(" "),o("ul",[o("li",[e._v("Either ScheduleToClose is provided or both of ScheduleToStart and StartToClose are provided.")]),e._v(" "),o("li",[e._v("If only ScheduleToClose, then ScheduleToStart and StartToClose are default to it.")]),e._v(" "),o("li",[e._v("If only ScheduleToStart and StartToClose are provided, then "),o("code",[e._v("ScheduleToClose = ScheduleToStart + StartToClose")]),e._v(".")]),e._v(" "),o("li",[e._v("All of them are capped by workflowTimeout. (e.g. if workflowTimeout is 1hour, set 2 hour for ScheduleToClose will still get 1 hour :"),o("code",[e._v("ScheduleToClose=Min(ScheduleToClose, workflowTimeout)")]),e._v(" )")])])])]),e._v(" "),o("p",[o("strong",[e._v("So why are they?")])]),e._v(" "),o("p",[e._v("You may notice that ScheduleToClose is only useful when\n"),o("code",[e._v("ScheduleToClose < ScheduleToStart + StartToClose")]),e._v(". Because if "),o("code",[e._v("ScheduleToClose >= ScheduleToStart+StartToClose")]),e._v(" the ScheduleToClose timeout is already enforced by the combination of the other two, and it become meaningless.")]),e._v(" "),o("p",[e._v("So the main use case of ScheduleToClose being less than the sum of two is that people want to limit the overall timeout of the activity but give more timeout for scheduleToStart or startToClose. "),o("strong",[e._v("This is extremely rare use case")]),e._v(".")]),e._v(" "),o("p",[e._v("Also the main use case that people want to distinguish ScheduleToStart and StartToClose is that the workflow may need to do some special handling for ScheduleToStart timeout error. "),o("strong",[e._v("This is also very rare use case")]),e._v(".")]),e._v(" "),o("p",[e._v("Therefore, you can understand why in TL;DR that I recommend only using "),o("strong",[e._v("ScheduleToClose")]),e._v(" but leave the other two empty. Because only in some rare cases you may need it. If you can't think of the use case, then you do not need it.")]),e._v(" "),o("p",[e._v("LocalActivity doesn't have ScheduleToStart/StartToClose because it's started directly inside workflow worker without server scheduling involved.")]),e._v(" "),o("h3",{attrs:{id:"heartbeat-timeout"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#heartbeat-timeout"}},[e._v("#")]),e._v(" Heartbeat timeout")]),e._v(" "),o("p",[e._v("Heartbeat is very important for long running activity, to prevent it from getting stuck. Not only bugs can cause activity getting stuck, regular deployment/host restart/failure could also cause it. Because without heartbeat, Cadence server couldn't know whether or not the activity is still being worked on. See more details about here https://stackoverflow.com/questions/65118584/solutions-to-stuck-timers-activities-in-cadence-swf-stepfunctions/65118585#65118585")]),e._v(" "),o("h3",{attrs:{id:"retryoptions-and-activity-with-retry"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#retryoptions-and-activity-with-retry"}},[e._v("#")]),e._v(" RetryOptions and Activity with Retry")]),e._v(" "),o("p",[e._v("First of all, here RetryOptions is for "),o("code",[e._v("server side")]),e._v(" backoff retry -- meaning that the retry is managed automatically by Cadence without interacting with workflows. Because retry is managed by Cadence, the activity has to be specially handled in Cadence history that the started event can not written until the activity is closed. Here is some reference: https://stackoverflow.com/questions/65113363/why-an-activity-task-is-scheduled-but-not-started/65113365#65113365")]),e._v(" "),o("p",[e._v("In fact, workflow can do "),o("code",[e._v("client side")]),e._v(" retry on their own. This means workflow will be managing the retry logic. You can write your own retry function, or there is some helper function in SDK,  like "),o("code",[e._v("Workflow.retry")]),e._v(" in Cadence-java-client. Client side retry will show all start events immediately, but there will be many events in the history when retrying for a single activity. It's not recommended because of performance issue.")]),e._v(" "),o("p",[e._v("So what do the options mean:")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("ExpirationInterval:")]),e._v(" "),o("ul",[o("li",[e._v("It replaces the ScheduleToClose timeout to become the actual overall timeout of the activity for all attempts.")]),e._v(" "),o("li",[e._v("It's also capped to workflow timeout like other three timeout options. "),o("code",[e._v("ScheduleToClose = Min(ScheduleToClose, workflowTimeout)")])]),e._v(" "),o("li",[e._v("The timeout of each attempt is StartToClose, but StartToClose defaults to ScheduleToClose like explanation above.")]),e._v(" "),o("li",[e._v("ScheduleToClose will be extended to ExpirationInterval:\n"),o("code",[e._v("ScheduleToClose = Max(ScheduleToClose, ExpirationInterval)")]),e._v(", and this happens before ScheduleToClose is copied to ScheduleToClose and StartToClose.")])])]),e._v(" "),o("li",[o("p",[e._v("InitialInterval: the interval of first retry")])]),e._v(" "),o("li",[o("p",[e._v("BackoffCoefficient: self explained")])]),e._v(" "),o("li",[o("p",[e._v("MaximumInterval: maximum of the interval during retry")])]),e._v(" "),o("li",[o("p",[e._v("MaximumAttempts: the maximum attempts. If existing with ExpirationInterval, then retry stops when either one of them is exceeded.")])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Requirements and defaults")]),e._v(":")])]),e._v(" "),o("li",[o("p",[e._v("Either MaximumAttempts or ExpirationInterval is required. ExpirationInterval is set to workflowTimeout if not provided.")])])]),e._v(" "),o("p",[e._v("Since ExpirationInterval is always there, and in fact it's more useful. And I think it's quite confusing to use MaximumAttempts, so I would recommend just use ExpirationInterval. Unless you really need it.")])])}),[],!1,null,null,null);t.default=a.exports}}]);