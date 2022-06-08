export const json = {
  "pages": [
   {
     "name": "page1",
     "title": "Lexus PDS Event Data",
     "elements": [
       {
         "type": "text",
         "name": "date_event",
         "isRequired": true,
         "title": "Date of Event",
         "inputType": "date"
       },
       {
         "type": "dropdown",
         "name": "timezones",
         "title": "Time Zone of Time Entries",
         "isRequired": true,
         "colCount": 0,
         "hasNone": false,
         "choices": [
           "Adak",
           "Anchorage",
           "Boise",
           "Chicago",
           "Denver",
           "Detroit",
           "Indiana/Indianapolis",
           "Indiana/Knox",
           "Indiana/Marengo",
           "Indiana/Petersburg",
           "Indiana/Tell City",
           "Indiana/Vevay",
           "Indiana/Vincennes",
           "Indiana/Winamac",
           "Juneau",
           "Kentucky/Louisville",
           "Kentucky/Monticello",
           "Los Angeles",
           "Menominee",
           "Metlaktla",
           "New York",
           "Nome",
           "North Dakota/Beulah",
           "North Dakota/Center",
           "North Dakota/New Salem",
           "Phoenix",
           "Shiprock",
           "Sitka",
           "Yakutat",
           "Honolulu"
         ]
       },
       {
         "type": "radiogroup",
         "name": "venue",
         "title": "Venue",
         "isRequired": true,
         "hasNone": false,
         "colCount": 1,
         "choices": [
           "WeatherTech Raceway Laguna Seca",
           "Michelin Raceway Road Atlanta",
           "Circuit of Americas",
           "Road America",
           "Indianapolis Motor Speedway"
         ]
       },
       {
         "type": "radiogroup",
         "name": "class",
         "title": "Class",
         "isRequired": true,
         "hasNone": false,
         "colCount": 1,
         "choices": [
           "Carbon",
           "Green",
           "Yellow",
           "Red"
         ]
       },
       {
        "type": "radiogroup",
        "name": "class",
        "title": "Class",
        "isRequired": true,
        "hasNone": false,
        "colCount": 1,
        "choices": [
          "Performance",
          "Master Class"
        ]
      },
     ]

   },  
   {
        "name": "page2",
        "title": "Participant Information",
        "elements": [
         {
           "type": "paneldynamic",
           "name": "contestants",
           "title": "Please fill out details",
           "renderMode": "progressTop",
           "templateTitle": "#{panelIndex}. Information about: {panel.first_name}",
           "templateElements": [
             {
               "type": "text",
               "isRequired": true,
               "name": "first_name",
               "title": "First Name"
             },
             {
               "type": "text",
               "name": "last_name",
               "isRequired": true,
               "startWithNewLine": false,
               "title": "Last Name"
             },
             {
               "type": "panel",
               "name": "contact_info",
               "elements": [
                 {
                   "type": "text",
                   "name": "email",
                   "isRequired": true,
                   "title": "Email",
                   "inputType": "email"
                 },
                 {
                   "type": "text",
                   "name": "phone_number",
                   "isRequired": true,
                   "title": "Phone Number",
                   "inputType": "tel"
                 },
                 {
                   "type": "text",
                   "name": "vin",
                   "isRequired": true,
                   "title": "Enter Assigned Car (VIN)",
                 },
                 {
                   "type": "text",
                   "name": "assigned_car",
                   "title": "Assigned Car Number",
                   "isRequired": true
                 },
               ],
               "title": "Contact Info",
               "showNumber": true,
               "showQuestionNumbers": "off"
             },
             {
              "type": "panel",
              "name": "autcross_info",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "autocross_class",
                  "title": "Type",
                  "isRequired": true,
                  "hasNone": false,
                  "colCount": 1,
                  "choices": [
                    "Another Car",
                    "Assigned Car"
                  ]
                },
                {
                  "type": "text",
                  "name": "autocross_vin",
                  "isRequired": true,
                  "title": "Enter Autocross Car (VIN)",
                },
                {
                  "type": "text",
                  "name": "autocross__car_number",
                  "title": "Autocross Car Number",
                  "isRequired": true,
                },
                {
                  "type": "text",
                  "inputMask": "datetime",
                  "inputFormat": "hh:mm:ss",
                  "isRequired": true,
                  "name": "enter_lead_autocross_time",
                  "title": "Time Student Enters Autocross Car"
                },
                {
                  "type": "text",
                  "inputMask": "datetime",
                  "inputFormat": "hh:mm:ss",
                  "isRequired": true,
                  "name": "exit_lead_autocross_time",
                  "title": "Time Student Exits Autocross Car"
                },
                {
                  "type": "text",
                  "inputMask": "datetime",
                  "inputFormat": "mm:ss",
                  "isRequired": true,
                  "name": "autocross_best_lap_time",
                  "title": "Best Lap Time After Penalties"
                }
              ],
              "title": "AutoCross Car",
              "showNumber": true,
              "showQuestionNumbers": "off"
            },
            {
              "type": "panel",
              "name": "follow_info",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "follow_class",
                  "title": "Type",
                  "isRequired": true,
                  "hasNone": false,
                  "colCount": 1,
                  "choices": [
                    "Another Car",
                    "Assigned Car"
                  ]
                },
                {
                  "type": "text",
                  "name": "follow_vin",
                  "isRequired": true,
                  "title": "Enter Follow Car (VIN)",
                },
                {
                  "type": "text",
                  "name": "follow_assigned_car",
                  "isRequired": true,
                  "title": "Follow Car Number",
                  "isRequired": false
                },
                {
                  "type": "text",
                  "inputMask": "datetime",
                  "inputFormat": "hh:mm:ss",
                  "isRequired": true,
                  "name": "enter_lead_follow_time",
                  "title": "Time Student Enters Follow Car"
                },
                {
                  "type": "text",
                  "inputMask": "datetime",
                  "inputFormat": "hh:mm:ss",
                  "isRequired": true,
                  "name": "exit_lead_follow_time",
                  "title": "Time Student Exits Follow Car"
                },
                {
                  "type": "text",
                  "inputMask": "datetime",
                  "inputFormat": "mm:ss",
                  "isRequired": true,
                  "name": "follow_best_lap_time",
                  "title": "Best Lap Time After Penalties"
                }
              ],
              "title": "Follow Car",
              "showNumber": true,
              "showQuestionNumbers": "off"
            },
            {
              "type": "panel",
              "name": "skid_pad_info",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "skid_class",
                  "title": "Type",
                  "isRequired": true,
                  "hasNone": false,
                  "colCount": 1,
                  "choices": [
                    "Another Car",
                    "Assigned Car"
                  ]
                },
                {
                  "type": "text",
                  "name": "skid_vin",
                  "isRequired": true,
                  "title": "Enter Skid Pad Car (VIN)",
                },
                {
                  "type": "text",
                  "name": "skid_assigned_car",
                  "title": "Skid Pad Car Number",
                  "isRequired": true
                },
                {
                  "type": "text",
                  "inputMask": "datetime",
                  "inputFormat": "hh:mm:ss",
                  "isRequired": true,
                  "name": "enter_lead_skid_pad_time",
                  "title": "Time Student Enters Skid Pad Car"
                },
                {
                  "type": "text",
                  "inputMask": "datetime",
                  "inputFormat": "hh:mm:ss",
                  "isRequired": true,
                  "name": "exit_lead_skid_pad_time",
                  "title": "Time Student Exits Skid Pad Car"
                },
                {
                  "type": "text",
                  "inputMask": "datetime",
                  "inputFormat": "mm:ss",
                  "isRequired": true,
                  "name": "skid_best_lap_time",
                  "title": "Best Lap Time After Penalties"
                }
              ],
              "title": "Skid Pad Car",
              "showNumber": true,
              "showQuestionNumbers": "off"
            },
            {
              "type": "panel",
              "name": "hot_lap_info",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "hot_class",
                  "title": "Type",
                  "isRequired": true,
                  "hasNone": false,
                  "colCount": 1,
                  "choices": [
                    "Another Car",
                    "Assigned Car"
                  ]
                },
                {
                  "type": "text",
                  "name": "hot_vin",
                  "isRequired": true,
                  "title": "Enter Hot Lap Car (VIN)",
                },
                {
                  "type": "text",
                  "name": "hot_assigned_car",
                  "title": "Hot Lap Car Number",
                  "isRequired": true
                },
                {
                  "type": "text",
                  "inputMask": "datetime",
                  "inputFormat": "hh:mm:ss",
                  "isRequired": true,
                  "name": "enter_lead_hot_lap_time",
                  "title": "Time Student Enters Hot Lap Car"
                },
                {
                  "type": "text",
                  "inputMask": "datetime",
                  "inputFormat": "hh:mm:ss",
                  "isRequired": true,
                  "name": "exit_lead_hot_lap_time",
                  "title": "Time Student Exits Hot Lap Car"
                },
                {
                  "type": "text",
                  "inputMask": "datetime",
                  "inputFormat": "mm:ss",
                  "isRequired": true,
                  "name": "hot_best_lap_time",
                  "title": "Best Lap Time After Penalties"
                }
              ],
              "title": "Hot Lap Car",
              "showNumber": true,
              "showQuestionNumbers": "off"
            }
           ],
           "panelCount": 1,
           "panelAddText": "Add a participant",
           "panelRemoveText": "Remove the participant"
         }
        ]
     }
  ]
};