import React from "react";
import $ from "jquery";
import 'inputmask/dist/inputmask/phone-codes/phone';

import { StylesManager, Model } from "survey-core";
import { Survey } from "survey-react-ui";

import "survey-core/defaultV2.css";
import "./index.css";
import { json } from "./json"

import * as SurveyCore from "survey-core";
import * as widgets from "surveyjs-widgets";
window["$"] = window["jQuery"] = $;

StylesManager.applyTheme("defaultV2");
widgets.inputmask(SurveyCore);

function SurveyComponent() {
    const survey = new Model(json);

    // TODO: Complete database integration
    // Users choice to use S3 bucket, DynamoDB, PostgreSQL, etc, raw json
    survey.onComplete.add(function (sender)
    {
        console.log(JSON.stringify(sender.data));
    })

    return (<Survey model={survey} />);
}

export default SurveyComponent;
