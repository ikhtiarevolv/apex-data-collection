import React from "react";
import $ from "jquery";
import Inputmask from 'inputmask';
import 'inputmask/dist/inputmask/phone-codes/phone';

import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

import "survey-core/defaultV2.css";
import "./index.css";
import { json } from "./json"

import * as SurveyCore from "survey-core";
import * as SurveyReact from "survey-react-ui";
import * as widgets from "surveyjs-widgets";
window["$"] = window["jQuery"] = $;

StylesManager.applyTheme("defaultV2");
widgets.inputmask(SurveyCore);

function SurveyComponent() {
    const survey = new Model(json);

    // TODO: complete fixing axios/API Gateway CORS settings
    survey.onComplete.add(function (sender)
    {
        console.log(JSON.stringify(sender.data));
    })

    return (<Survey model={survey} />);
}

export default SurveyComponent;
