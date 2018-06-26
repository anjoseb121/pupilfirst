// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var StartupsList$ReactTemplate = require("./StartupsList.bs.js");
var TimelineEvent$ReactTemplate = require("../types/TimelineEvent.bs.js");
var TimelineEventsPanel$ReactTemplate = require("./TimelineEventsPanel.bs.js");

var component = ReasonReact.reducerComponent("CoachDashboard");

function make(coach, startups, timelineEvents, _) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function (param) {
              var send = param[/* send */3];
              var state = param[/* state */1];
              var selectStartupCB = function (id) {
                return Curry._1(send, /* SelectStartup */[id]);
              };
              var clearStartupCB = function () {
                return Curry._1(send, /* ClearStartup */0);
              };
              return React.createElement("div", undefined, "Welcome Coach " + coach.name, ReasonReact.element(/* None */0, /* None */0, StartupsList$ReactTemplate.make($$Array.to_list(startups), state[/* selectedStartupId */0], selectStartupCB, clearStartupCB, /* array */[])), ReasonReact.element(/* None */0, /* None */0, TimelineEventsPanel$ReactTemplate.make(state[/* timelineEvents */1], state[/* selectedStartupId */0], /* array */[])));
            }),
          /* initialState */(function () {
              return /* record */[
                      /* selectedStartupId : None */0,
                      /* timelineEvents */$$Array.to_list($$Array.map(TimelineEvent$ReactTemplate.create, timelineEvents))
                    ];
            }),
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */(function (action, state) {
              if (action) {
                return /* Update */Block.__(0, [/* record */[
                            /* selectedStartupId : Some */[action[0]],
                            /* timelineEvents */state[/* timelineEvents */1]
                          ]]);
              } else {
                return /* Update */Block.__(0, [/* record */[
                            /* selectedStartupId : None */0,
                            /* timelineEvents */state[/* timelineEvents */1]
                          ]]);
              }
            }),
          /* subscriptions */component[/* subscriptions */13],
          /* jsElementWrapped */component[/* jsElementWrapped */14]
        ];
}

var jsComponent = ReasonReact.wrapReasonForJs(component, (function (jsProps) {
        return make(jsProps.coach, jsProps.startups, jsProps.timelineEvents, /* array */[]);
      }));

exports.component = component;
exports.make = make;
exports.jsComponent = jsComponent;
/* component Not a pure module */
