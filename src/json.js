export const json = {
  "title": "Lexus Performance Driving School Form",
  "pages": [
    {
      "name": "page1",
      "title": "Contact Info",
      "elements": [
        {
          "type": "image",
          "name": "first_page_image",
          "width": "400px",
          "minWidth": "400px",
          "maxWidth": "400px",
          "imageLink": "https://www.carscoops.com/wp-content/uploads/2022/05/2023-Lexus-RX-Teaser-1.jpg",
          "imageFit": "none",
          "imageHeight": 726,
          "imageWidth": 400
        },
        {
          "type": "panel",
          "name": "first_page_container_panel",
          "elements": [
            {
              "type": "text",
              "name": "first_name",
              "title": "First Name"
            },
            {
              "type": "text",
              "name": "last_name",
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
                  "title": "Email",
                  "inputType": "email"
                },
                {
                  "type": "text",
                  "name": "phone_number",
                  "title": "Phone Number",
                  "inputType": "tel"
                },
                {
                  "type": "text",
                  "name": "date_event",
                  // "isRequired": true,
                  "title": "Date of Event",
                  "inputType": "date"
                }
              ],
              "title": "Contact Info",
              "showNumber": true,
              "showQuestionNumbers": "off"
            }
          ],
          "startWithNewLine": false
        }
      ]
    },
    {
      "name": "page2",
      "title": "Event",
      "elements": [
        {
          "type": "panel",
          "name": "second_page_container_panel",
          "elements": [
            {
                "type": "dropdown",
                "name": "timezones",
                "title": "Time Zone of Time Entries",
                "isRequired": false,
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
                "name": "class",
                "title": "Class",
                "isRequired": false,
                "hasNone": false,
                "colCount": 1,
                "choices": [
                  "Performance",
                  "Master Class"
                ]
              },
              {
                "type": "radiogroup",
                "name": "venue",
                "title": "Venue",
                "isRequired": false,
                "hasNone": false,
                "colCount": 1,
                "choices": [
                  "WeatherTech Raceway Laguna Seca",
                  "Michelin Raceway Road Atlanta",
                  "Circuit of Americas",
                  "Road America",
                  "Indianapolis Motor Speedway"
                ]
              }
          ],
          "startWithNewLine": false
        }
      ]
    },
    {
      "name": "page3",
      "title": "Group and Car Assignments",
      "elements": [
        {
          "type": "panel",
          "name": "third_page_container_panel",
          "elements": [
              {
                "type": "radiogroup",
                "name": "class",
                "title": "Class",
                "isRequired": false,
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
                "type": "text",
                "name": "vin",
                "title": "Enter Assigned Car (VIN)",
              },
              {
                "type": "text",
                "name": "assigned_car",
                "title": "Assigned Car Number",
                "isRequired": false
              }
          ],
          "startWithNewLine": false
        }
      ]
    },
    {
      "name": "page4",
      "title": "Autocross (Competition)",
      "elements": [
        {
          "type": "boolean",
          "name": "the_autocross_car",
          "title": "The Autocross Car Is",
          "isRequired": true,
          "labelTrue": "Assigned Car",
          "labelFalse": "Another Car",
          "hideNumber": true
        },
        {
          "type": "panel",
          "name": "the_autocross_car_is_assigned_car",
          "elements": [
            {
              "type": "text",
              "inputMask": "datetime",
              "inputFormat": "hh:mm:ss",
              "name": "enter_lead_autocross_time",
              "title": "Time Student Enters Autocross Car"
            },
            {
              "type": "text",
              "inputMask": "datetime",
              "inputFormat": "hh:mm:ss",
              "name": "exit_lead_autocross_time",
              "title": "Time Student Exits Autocross Car"
            },
            {
              "type": "text",
              "inputMask": "datetime",
              "inputFormat": "hh:mm:ss",
              "name": "best_lap_time",
              "title": "Best Lap Time After Penalties"
            }
          ],
          "visibleIf": "{the_autocross_car} = true",
          "title": "Assigned Car",
          "showNumber": true,
          "showQuestionNumbers": "off"
        },
        {
          "type": "panel",
          "name": "the_follow_car_is_another_car",
          "elements": [
            {
              "type": "text",
              "name": "vin",
              "title": "Enter Autocross Car (VIN)",
            },
            {
              "type": "text",
              "name": "assigned_car",
              "title": "Autocross Car Number",
              "isRequired": false
            },
            {
              "type": "text",
              "inputMask": "datetime",
              "inputFormat": "hh:mm:ss",
              "name": "enter_autocross_time",
              "title": "Time Student Enters Autocross Car"
            },
            {
              "type": "text",
              "inputMask": "datetime",
              "inputFormat": "hh:mm:ss",
              "name": "exit_autocross_time",
              "title": "Time Student Exits Autocross Car"
            },
            {
              "type": "text",
              "inputMask": "datetime",
              "inputFormat": "hh:mm:ss",
              "name": "best_lap_time",
              "title": "Best Lap Time After Penalties"
            }
          ],
          "visibleIf": "{the_autocross_car} = false",
          "title": "Another Car",
          "showNumber": true,
          "showQuestionNumbers": "off"
        }
      ]
    },
    {
      "name": "page5",
      "title": "Lead/Follow",
      "elements": [
        {
          "type": "boolean",
          "name": "the_follow_car",
          "title": "The Follow Car Is",
          "isRequired": true,
          "labelTrue": "Assigned Car",
          "labelFalse": "Another Car",
          "hideNumber": true
        },
        {
          "type": "panel",
          "name": "the_follow_car_is_assigned_car",
          "elements": [
            {
              "type": "text",
              "inputMask": "datetime",
              "inputFormat": "hh:mm:ss",
              "name": "enter_lead_follow_time",
              "title": "Time Student Enters Autocross Car"
            },
            {
              "type": "text",
              "inputMask": "datetime",
              "inputFormat": "hh:mm:ss",
              "name": "exit_lead_follow_time",
              "title": "Time Student Exits Autocross Car"
            }
          ],
          "visibleIf": "{the_follow_car} = true",
          "title": "Assigned Car",
          "showNumber": true,
          "showQuestionNumbers": "off"
        },
        {
          "type": "panel",
          "name": "the_follow_car_is_another_car",
          "elements": [
            {
              "type": "text",
              "name": "vin",
              "title": "Enter Follow Car (VIN)",
            },
            {
              "type": "text",
              "name": "assigned_car",
              "title": "Follow Car Number",
              "isRequired": false
            },
            {
              "type": "text",
              "inputMask": "datetime",
              "inputFormat": "hh:mm:ss",
              "name": "enter_follow_time",
              "title": "Time Student Enters Follow Car"
            },
            {
              "type": "text",
              "inputMask": "datetime",
              "inputFormat": "hh:mm:ss",
              "name": "exit_follow_time",
              "title": "Time Student Exits Follow Car"
            }
          ],
          "visibleIf": "{the_follow_car} = false",
          "title": "Another Car",
          "showNumber": true,
          "showQuestionNumbers": "off"
        }
      ]
    },
    {
      "name": "page6",
      "title": "Skid Pad",
      "elements": [
        {
          "type": "boolean",
          "name": "the_skid_pad_car",
          "title": "The Skid Pad Car Is",
          "isRequired": true,
          "labelTrue": "Assigned Car",
          "labelFalse": "Another Car",
          "hideNumber": true
        },
        {
          "type": "panel",
          "name": "the_skid_pad_car_is_assigned_car",
          "elements": [
            {
              "type": "text",
              "inputMask": "datetime",
              "inputFormat": "hh:mm:ss",
              "name": "enter_lead_skid_pad_time",
              "title": "Time Student Enters Skid Pad Car"
            },
            {
              "type": "text",
              "inputMask": "datetime",
              "inputFormat": "hh:mm:ss",
              "name": "exit_lead_skid_pad_time",
              "title": "Time Student Exits Skid Pad Car"
            }
          ],
          "visibleIf": "{the_skid_pad_car} = true",
          "title": "Assigned Car",
          "showNumber": true,
          "showQuestionNumbers": "off"
        },
        {
          "type": "panel",
          "name": "the_skid_pad_car_is_another_car",
          "elements": [
            {
              "type": "text",
              "name": "vin",
              "title": "Enter Skid Pad Car (VIN)",
            },
            {
              "type": "text",
              "name": "assigned_car",
              "title": "Skid Pad Car Number",
              "isRequired": false
            },
            {
              "type": "text",
              "inputMask": "datetime",
              "inputFormat": "hh:mm:ss",
              "name": "enter_skid_pad_time",
              "title": "Time Student Enters Skid Pad Car"
            },
            {
              "type": "text",
              "inputMask": "datetime",
              "inputFormat": "hh:mm:ss",
              "name": "exit_skid_pad_time",
              "title": "Time Student Exits Skid Pad Car"
            }
          ],
          "visibleIf": "{the_skid_pad_car} = false",
          "title": "Another Car",
          "showNumber": true,
          "showQuestionNumbers": "off"
        }
      ]
    },
    {
      "name": "page7",
      "title": "Hot Lap",
      "elements": [
        {
          "type": "boolean",
          "name": "the_hot_lap_car",
          "title": "The Hot Lap Car Is",
          "isRequired": true,
          "labelTrue": "Assigned Car",
          "labelFalse": "Another Car",
          "hideNumber": true
        },
        {
          "type": "panel",
          "name": "the_hot_lap_car_is_assigned_car",
          "elements": [
            {
              "type": "text",
              "inputMask": "datetime",
              "inputFormat": "hh:mm:ss",
              "name": "enter_lead_hot_lap_time",
              "title": "Time Student Enters Hot Lap Car"
            },
            {
              "type": "text",
              "inputMask": "datetime",
              "inputFormat": "hh:mm:ss",
              "name": "exit_lead_hot_lap_time",
              "title": "Time Student Exits Hot Lap Car"
            },
            {
              "type": "radiogroup",
              "name": "class",
              "title": "Class",
              "isRequired": false,
              "hasNone": false,
              "colCount": 1,
              "choices": [
                "Scott Pruett",
                "Townsend Bell"
              ]
            }
          ],
          "visibleIf": "{the_hot_lap_car} = true",
          "title": "Assigned Car",
          "showNumber": true,
          "showQuestionNumbers": "off"
        },
        {
          "type": "panel",
          "name": "the_hot_lap_car_is_another_car",
          "elements": [
            {
              "type": "text",
              "name": "vin",
              "title": "Enter Hot Lap Car (VIN)",
            },
            {
              "type": "text",
              "name": "assigned_car",
              "title": "Hot Lap Car Number",
              "isRequired": false
            },
            {
              "type": "text",
              "inputMask": "datetime",
              "inputFormat": "hh:mm:ss",
              "name": "enter_hot_lap_time",
              "title": "Time Student Enters Hot Lap Car"
            },
            {
              "type": "text",
              "inputMask": "datetime",
              "inputFormat": "hh:mm:ss",
              "name": "exit_hot_lap_time",
              "title": "Time Student Exits Hot Lap Car"
            },
            {
              "type": "radiogroup",
              "name": "class",
              "title": "Class",
              "isRequired": false,
              "hasNone": false,
              "colCount": 1,
              "choices": [
                "Scott Pruett",
                "Townsend Bell"
              ]
            }
          ],
          "visibleIf": "{the_hot_lap_car} = false",
          "title": "Another Car",
          "showNumber": true,
          "showQuestionNumbers": "off"
        }
      ]
    }
  ],
  "showProgressBar": "top",
};
