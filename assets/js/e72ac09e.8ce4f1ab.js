"use strict";(self.webpackChunkq_consultation_doc=self.webpackChunkq_consultation_doc||[]).push([[895],{1837:e=>{e.exports=JSON.parse('{"url":"https://api-demo-qclite.quickblox.com/swagger/json","themeId":"theme-redoc","isSpecFile":false,"spec":{"openapi":"3.0.3","info":{"version":"1.2.4-plus","title":"q-consultation-api"},"components":{"securitySchemes":{"apiKey":{"type":"http","scheme":"bearer","description":"API Token"},"providerSession":{"type":"http","scheme":"bearer","description":"Provider session token"},"clientSession":{"type":"http","scheme":"bearer","description":"Client session token"}},"schemas":{"Error":{"type":"object","properties":{"statusCode":{"type":"integer"},"error":{"type":"string"},"message":{"type":"string"}},"required":["statusCode","error","message"]},"QBUser":{"type":"object","properties":{"id":{"type":"integer"},"full_name":{"type":"string"},"email":{"format":"email","type":"string"},"created_at":{"format":"date-time","type":"string"},"updated_at":{"format":"date-time","type":"string"},"last_request_at":{"format":"date-time","type":"string"},"custom_data":{"anyOf":[{"type":"string"},{"type":"null"}]},"user_tags":{"anyOf":[{"type":"string"},{"type":"null"}]}},"required":["id","full_name","email","created_at","updated_at","last_request_at","custom_data","user_tags"]},"QCProvider":{"type":"object","allOf":[{"type":"object","properties":{"id":{"type":"integer"},"full_name":{"type":"string"},"email":{"format":"email","type":"string"},"created_at":{"format":"date-time","type":"string"},"updated_at":{"format":"date-time","type":"string"},"last_request_at":{"format":"date-time","type":"string"}},"required":["id","full_name","email","created_at","updated_at","last_request_at"]},{"type":"object","properties":{"full_name":{"type":"string"},"description":{"type":"string"},"language":{"type":"string"}},"required":["full_name"]}]},"QCClient":{"type":"object","allOf":[{"type":"object","properties":{"id":{"type":"integer"},"full_name":{"type":"string"},"email":{"format":"email","type":"string"},"created_at":{"format":"date-time","type":"string"},"updated_at":{"format":"date-time","type":"string"},"last_request_at":{"format":"date-time","type":"string"}},"required":["id","full_name","email","created_at","updated_at","last_request_at"]},{"type":"object","properties":{"full_name":{"type":"string"},"birthdate":{"type":"string"},"gender":{"anyOf":[{"type":"string","enum":["male"]},{"type":"string","enum":["female"]}]},"address":{"type":"string"},"language":{"type":"string"}},"required":["full_name","birthdate","gender"]}]},"QBSession":{"type":"object","properties":{"_id":{"pattern":"^[a-z0-9]{24}$","type":"string"},"application_id":{"type":"integer"},"created_at":{"format":"date-time","type":"string"},"id":{"type":"integer"},"nonce":{"type":"string"},"token":{"type":"string"},"ts":{"type":"integer"},"updated_at":{"format":"date-time","type":"string"},"user_id":{"type":"integer"}},"required":["_id","application_id","created_at","id","nonce","token","ts","updated_at","user_id"]},"QBDialog":{"type":"object","properties":{"_id":{"type":"string"},"created_at":{"type":"string"},"data":{"type":"object","additionalProperties":{"type":"string"}},"last_message":{"anyOf":[{"type":"string"},{"type":"null"}]},"last_message_date_sent":{"anyOf":[{"type":"string"},{"type":"null"}]},"last_message_id":{"anyOf":[{"type":"string"},{"type":"null"}]},"last_message_user_id":{"anyOf":[{"type":"integer"},{"type":"null"}]},"name":{"type":"string"},"occupants_ids":{"type":"array","items":{"type":"number"}},"photo":{"type":"null"},"type":{"type":"number"},"updated_at":{"type":"string"},"user_id":{"type":"integer"},"xmpp_room_jid":{"anyOf":[{"type":"string"},{"type":"null"}]},"unread_messages_count":{"anyOf":[{"type":"number"},{"type":"null"}]},"joined":{"type":"boolean"}},"required":["_id","created_at","last_message","last_message_date_sent","last_message_id","last_message_user_id","name","occupants_ids","photo","type","updated_at","user_id","xmpp_room_jid","unread_messages_count"]},"QCAppointment":{"type":"object","allOf":[{"type":"object","properties":{"_id":{"pattern":"^[a-z0-9]{24}$","type":"string"},"user_id":{"type":"integer"},"_parent_id":{"anyOf":[{"type":"string"},{"type":"null"}]},"created_at":{"type":"number"},"updated_at":{"type":"number"}},"required":["_id","user_id","_parent_id","created_at","updated_at"]},{"type":"object","properties":{"priority":{"type":"number"},"client_id":{"type":"integer"},"provider_id":{"type":"integer"},"dialog_id":{"type":"string"},"description":{"type":"string"},"notes":{"anyOf":[{"type":"string"},{"type":"null"}]},"conclusion":{"type":"string"},"date_end":{"type":"string"},"language":{"type":"string"}},"required":["priority","client_id","provider_id","dialog_id","description","notes"]}]},"QCRecord":{"type":"object","allOf":[{"type":"object","properties":{"_id":{"pattern":"^[a-z0-9]{24}$","type":"string"},"user_id":{"type":"integer"},"_parent_id":{"anyOf":[{"type":"string"},{"type":"null"}]},"created_at":{"type":"number"},"updated_at":{"type":"number"}},"required":["_id","user_id","_parent_id","created_at","updated_at"]},{"type":"object","properties":{"uid":{"type":"string"},"name":{"type":"string"},"transcription":{"type":"array","items":{"description":"Format: \\"time|text\\"","type":"string"}},"summary":{"type":"string"},"actions":{"type":"string"},"appointment_id":{"pattern":"^[a-z0-9]{24}$","type":"string"}}}]}}},"paths":{"/ai/audio-info":{"post":{"tags":["ai"],"description":"Get transcription, summary and actions for the audio","requestBody":{"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"voice":{"description":"File","type":"object","properties":{"buffer":{},"filename":{"type":"string"},"encoding":{"type":"string"},"mimetype":{"type":"string"}},"required":["buffer","filename","encoding","mimetype"]}},"required":["voice"]}}},"required":true},"security":[{"apiKey":[]},{"providerSession":[]}],"responses":{"200":{"description":"Default Response","content":{"application/json":{"schema":{"type":"object","properties":{"transcription":{"type":"array","items":{"type":"object","properties":{"start":{"type":"string"},"end":{"type":"string"},"text":{"type":"string"}},"required":["start","end","text"]}},"summary":{"type":"string"},"notes":{"type":"string"},"actions":{"type":"string"}}}}}},"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}}},"/ai/quick-answer":{"post":{"tags":["ai"],"description":"Get Quick answer","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"question":{"type":"string"}},"required":["question"]}}},"required":true},"security":[{"apiKey":[]},{"providerSession":[]}],"responses":{"200":{"description":"Default Response","content":{"application/json":{"schema":{"type":"object","properties":{"answer":{"type":"string"}},"required":["answer"]}}}},"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}}},"/appointments":{"post":{"tags":["appointments"],"description":"Create new appointment","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"provider_id":{"type":"integer"},"client_id":{"type":"integer"},"description":{"type":"string"}},"required":["provider_id","client_id","description"]}}},"required":true},"security":[{"apiKey":[]},{"providerSession":[]},{"clientSession":[]}],"responses":{"200":{"description":"Default Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/QCAppointment"}}}},"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}},"get":{"tags":["appointments"],"description":"Get a list of appointments","parameters":[{"schema":{"default":100,"type":"integer"},"in":"query","name":"limit","required":false},{"schema":{"default":0,"type":"integer"},"in":"query","name":"skip","required":false},{"schema":{"anyOf":[{"type":"string","enum":["_id"]},{"type":"string","enum":["user_id"]},{"type":"string","enum":["_parent_id"]},{"type":"string","enum":["created_at"]},{"type":"string","enum":["updated_at"]},{"type":"string","enum":["priority"]},{"type":"string","enum":["client_id"]},{"type":"string","enum":["provider_id"]},{"type":"string","enum":["dialog_id"]},{"type":"string","enum":["description"]},{"type":"string","enum":["notes"]},{"type":"string","enum":["conclusion"]},{"type":"string","enum":["date_end"]},{"type":"string","enum":["language"]}]},"in":"query","name":"sort_desc","required":false,"description":"Available values: _id, user_id, _parent_id, created_at, updated_at, priority, client_id, provider_id, dialog_id, description, notes, conclusion, date_end, language"},{"schema":{"anyOf":[{"type":"string","enum":["_id"]},{"type":"string","enum":["user_id"]},{"type":"string","enum":["_parent_id"]},{"type":"string","enum":["created_at"]},{"type":"string","enum":["updated_at"]},{"type":"string","enum":["priority"]},{"type":"string","enum":["client_id"]},{"type":"string","enum":["provider_id"]},{"type":"string","enum":["dialog_id"]},{"type":"string","enum":["description"]},{"type":"string","enum":["notes"]},{"type":"string","enum":["conclusion"]},{"type":"string","enum":["date_end"]},{"type":"string","enum":["language"]}]},"in":"query","name":"sort_asc","required":false,"description":"Available values: _id, user_id, _parent_id, created_at, updated_at, priority, client_id, provider_id, dialog_id, description, notes, conclusion, date_end, language"}],"security":[{"apiKey":[]},{"providerSession":[]},{"clientSession":[]}],"responses":{"200":{"description":"Default Response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/QCAppointment"}}}}},"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}}},"/auth/login":{"post":{"tags":["auth"],"description":"User login","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"role":{"anyOf":[{"type":"string","enum":["client"]},{"type":"string","enum":["provider"]}]},"email":{"format":"email","type":"string"},"password":{"type":"string"}},"required":["role","email","password"]}}},"required":true},"responses":{"200":{"description":"Default Response","content":{"application/json":{"schema":{"type":"object","properties":{"session":{"$ref":"#/components/schemas/QBSession"},"data":{"$ref":"#/components/schemas/QBUser"}},"required":["session","data"]}}}},"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}}},"/auth/logout":{"post":{"tags":["auth"],"description":"User logout","security":[{"providerSession":[]},{"clientSession":[]}],"responses":{"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}}},"/users/profile":{"get":{"tags":["users"],"description":"Get user profile","security":[{"providerSession":[]},{"clientSession":[]}],"responses":{"200":{"description":"Default Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/QBUser"}}}},"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}}},"/ai/providers/suggestions":{"post":{"tags":["ai"],"description":"Get suggested providers by name or issue","requestBody":{"content":{"application/json":{"schema":{"type":"object","properties":{"topic":{"type":"string"}},"required":["topic"]}}},"required":true},"security":[{"apiKey":[]},{"providerSession":[]},{"clientSession":[]}],"responses":{"200":{"description":"Default Response","content":{"application/json":{"schema":{"type":"object","properties":{"providers":{"type":"array","items":{"$ref":"#/components/schemas/QBUser"}}},"required":["providers"]}}}},"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}}},"/appointments/{id}":{"get":{"tags":["appointments"],"description":"Get appointment by id","parameters":[{"schema":{"pattern":"^[a-z0-9]{24}$","type":"string"},"in":"path","name":"id","required":true}],"security":[{"apiKey":[]},{"providerSession":[]},{"clientSession":[]}],"responses":{"200":{"description":"Default Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/QCAppointment"}}}},"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}},"put":{"tags":["appointments"],"description":"Update appointment by id","requestBody":{"content":{"application/json":{"schema":{"type":"object","allOf":[{"type":"object","properties":{}},{"type":"object","properties":{"priority":{"type":"number"},"provider_id":{"type":"integer"},"description":{"type":"string"},"notes":{"anyOf":[{"type":"string"},{"type":"null"}]},"conclusion":{"type":"string"},"date_end":{"type":"string"},"language":{"type":"string"}},"required":["priority","provider_id","description","notes"]}]}}}},"parameters":[{"schema":{"pattern":"^[a-z0-9]{24}$","type":"string"},"in":"path","name":"id","required":true}],"security":[{"apiKey":[]},{"providerSession":[]},{"clientSession":[]}],"responses":{"200":{"description":"Default Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/QCAppointment"}}}},"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}}},"/users/{id}":{"delete":{"tags":["users"],"description":"Delete user by id","parameters":[{"schema":{"type":"integer"},"in":"path","name":"id","required":true}],"security":[{"apiKey":[]}],"responses":{"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}},"get":{"tags":["users"],"description":"Get user by id","parameters":[{"schema":{"type":"integer"},"in":"path","name":"id","required":true}],"security":[{"apiKey":[]},{"providerSession":[]},{"clientSession":[]}],"responses":{"200":{"description":"Default Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/QBUser"}}}},"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}}},"/users/client":{"post":{"tags":["users"],"description":"Signup client","requestBody":{"content":{"multipart/form-data":{"schema":{"allOf":[{"type":"object","allOf":[{"type":"object","properties":{"full_name":{"type":"string"},"email":{"format":"email","type":"string"}},"required":["full_name","email"]},{"type":"object","properties":{"full_name":{"type":"string"},"birthdate":{"type":"string"},"gender":{"anyOf":[{"type":"string","enum":["male"]},{"type":"string","enum":["female"]}]},"address":{"type":"string"},"language":{"type":"string"}},"required":["full_name","birthdate","gender"]}]},{"type":"object","properties":{"password":{"type":"string"},"avatar":{"description":"File","type":"object","properties":{"buffer":{},"filename":{"type":"string"},"encoding":{"type":"string"},"mimetype":{"type":"string"}},"required":["buffer","filename","encoding","mimetype"]}},"required":["password"]}]}}}},"responses":{"200":{"description":"Default Response","content":{"application/json":{"schema":{"type":"object","properties":{"session":{"$ref":"#/components/schemas/QBSession"},"user":{"$ref":"#/components/schemas/QBUser"}},"required":["session","user"]}}}},"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}},"put":{"tags":["users"],"description":"Update client profile","requestBody":{"content":{"multipart/form-data":{"schema":{"anyOf":[{"allOf":[{"type":"object","allOf":[{"type":"object","properties":{"full_name":{"type":"string"},"email":{"format":"email","type":"string"}},"required":["full_name","email"]},{"type":"object","properties":{"full_name":{"type":"string"},"birthdate":{"type":"string"},"gender":{"anyOf":[{"type":"string","enum":["male"]},{"type":"string","enum":["female"]}]},"address":{"type":"string"},"language":{"type":"string"}},"required":["full_name","birthdate","gender"]}]},{"type":"object","properties":{"avatar":{"anyOf":[{"description":"File","type":"object","properties":{"buffer":{},"filename":{"type":"string"},"encoding":{"type":"string"},"mimetype":{"type":"string"}},"required":["buffer","filename","encoding","mimetype"]},{"type":"string","enum":["none"]}]}}}]},{"allOf":[{"type":"object","allOf":[{"type":"object","properties":{"full_name":{"type":"string"},"email":{"format":"email","type":"string"}},"required":["full_name","email"]},{"type":"object","properties":{"full_name":{"type":"string"},"birthdate":{"type":"string"},"gender":{"anyOf":[{"type":"string","enum":["male"]},{"type":"string","enum":["female"]}]},"address":{"type":"string"},"language":{"type":"string"}},"required":["full_name","birthdate","gender"]}]},{"type":"object","properties":{"avatar":{"anyOf":[{"description":"File","type":"object","properties":{"buffer":{},"filename":{"type":"string"},"encoding":{"type":"string"},"mimetype":{"type":"string"}},"required":["buffer","filename","encoding","mimetype"]},{"type":"string","enum":["none"]}]},"password":{"type":"string"},"old_password":{"type":"string"}},"required":["password","old_password"]}]}]}}}},"security":[{"clientSession":[]}],"responses":{"200":{"description":"Default Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/QBUser"}}}},"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}}},"/users/client/{id}":{"put":{"tags":["users"],"description":"Update client by id","requestBody":{"content":{"multipart/form-data":{"schema":{"allOf":[{"type":"object","allOf":[{"type":"object","properties":{"full_name":{"type":"string"},"email":{"format":"email","type":"string"}},"required":["full_name","email"]},{"type":"object","properties":{"full_name":{"type":"string"},"birthdate":{"type":"string"},"gender":{"anyOf":[{"type":"string","enum":["male"]},{"type":"string","enum":["female"]}]},"address":{"type":"string"},"language":{"type":"string"}},"required":["full_name","birthdate","gender"]}]},{"type":"object","properties":{"password":{"type":"string"},"avatar":{"anyOf":[{"description":"File","type":"object","properties":{"buffer":{},"filename":{"type":"string"},"encoding":{"type":"string"},"mimetype":{"type":"string"}},"required":["buffer","filename","encoding","mimetype"]},{"type":"string","enum":["none"]}]}}}]}}}},"parameters":[{"schema":{"type":"integer"},"in":"path","name":"id","required":true}],"security":[{"apiKey":[]}],"responses":{"200":{"description":"Default Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/QBUser"}}}},"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}}},"/users/provider":{"post":{"tags":["users"],"description":"Signup provider","requestBody":{"content":{"multipart/form-data":{"schema":{"allOf":[{"type":"object","allOf":[{"type":"object","properties":{"full_name":{"type":"string"},"email":{"format":"email","type":"string"}},"required":["full_name","email"]},{"type":"object","properties":{"full_name":{"type":"string"},"description":{"type":"string"},"language":{"type":"string"}},"required":["full_name"]}]},{"type":"object","properties":{"password":{"type":"string"},"avatar":{"description":"File","type":"object","properties":{"buffer":{},"filename":{"type":"string"},"encoding":{"type":"string"},"mimetype":{"type":"string"}},"required":["buffer","filename","encoding","mimetype"]}},"required":["password"]}]}}}},"responses":{"200":{"description":"Default Response","content":{"application/json":{"schema":{"type":"object","properties":{"session":{"$ref":"#/components/schemas/QBSession"},"user":{"$ref":"#/components/schemas/QBUser"}},"required":["session","user"]}}}},"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}},"put":{"tags":["users"],"description":"Update provider profile","requestBody":{"content":{"multipart/form-data":{"schema":{"anyOf":[{"allOf":[{"type":"object","allOf":[{"type":"object","properties":{"full_name":{"type":"string"},"email":{"format":"email","type":"string"}},"required":["full_name","email"]},{"type":"object","properties":{"full_name":{"type":"string"},"description":{"type":"string"},"language":{"type":"string"}},"required":["full_name"]}]},{"type":"object","properties":{"avatar":{"anyOf":[{"description":"File","type":"object","properties":{"buffer":{},"filename":{"type":"string"},"encoding":{"type":"string"},"mimetype":{"type":"string"}},"required":["buffer","filename","encoding","mimetype"]},{"type":"string","enum":["none"]}]}}}]},{"allOf":[{"type":"object","allOf":[{"type":"object","properties":{"full_name":{"type":"string"},"email":{"format":"email","type":"string"}},"required":["full_name","email"]},{"type":"object","properties":{"full_name":{"type":"string"},"description":{"type":"string"},"language":{"type":"string"}},"required":["full_name"]}]},{"type":"object","properties":{"avatar":{"anyOf":[{"description":"File","type":"object","properties":{"buffer":{},"filename":{"type":"string"},"encoding":{"type":"string"},"mimetype":{"type":"string"}},"required":["buffer","filename","encoding","mimetype"]},{"type":"string","enum":["none"]}]},"password":{"type":"string"},"old_password":{"type":"string"}},"required":["password","old_password"]}]}]}}}},"security":[{"providerSession":[]}],"responses":{"200":{"description":"Default Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/QBUser"}}}},"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}}},"/users/provider/{id}":{"put":{"tags":["users"],"description":"Update provider by id","requestBody":{"content":{"multipart/form-data":{"schema":{"allOf":[{"type":"object","allOf":[{"type":"object","properties":{"full_name":{"type":"string"},"email":{"format":"email","type":"string"}},"required":["full_name","email"]},{"type":"object","properties":{"full_name":{"type":"string"},"description":{"type":"string"},"language":{"type":"string"}},"required":["full_name"]}]},{"type":"object","properties":{"password":{"type":"string"},"avatar":{"anyOf":[{"description":"File","type":"object","properties":{"buffer":{},"filename":{"type":"string"},"encoding":{"type":"string"},"mimetype":{"type":"string"}},"required":["buffer","filename","encoding","mimetype"]},{"type":"string","enum":["none"]}]}}}]}}}},"parameters":[{"schema":{"type":"integer"},"in":"path","name":"id","required":true}],"security":[{"apiKey":[]}],"responses":{"200":{"description":"Default Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/QBUser"}}}},"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}}},"/appointments/{id}/records":{"post":{"tags":["appointments"],"description":"Create a record for the appointment","requestBody":{"content":{"multipart/form-data":{"schema":{"type":"object","properties":{"audio":{"description":"File","type":"object","properties":{"buffer":{},"filename":{"type":"string"},"encoding":{"type":"string"},"mimetype":{"type":"string"}},"required":["buffer","filename","encoding","mimetype"]},"video":{"description":"File","type":"object","properties":{"buffer":{},"filename":{"type":"string"},"encoding":{"type":"string"},"mimetype":{"type":"string"}},"required":["buffer","filename","encoding","mimetype"]}},"required":["audio"]}}},"required":true},"parameters":[{"schema":{"pattern":"^[a-z0-9]{24}$","type":"string"},"in":"path","name":"id","required":true}],"security":[{"apiKey":[]},{"providerSession":[]}],"responses":{"200":{"description":"Default Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/QCRecord"}}}},"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}},"get":{"tags":["appointments"],"description":"Get a list of records for the appointment","parameters":[{"schema":{"default":100,"type":"integer"},"in":"query","name":"limit","required":false},{"schema":{"default":0,"type":"integer"},"in":"query","name":"skip","required":false},{"schema":{"anyOf":[{"type":"string","enum":["_id"]},{"type":"string","enum":["user_id"]},{"type":"string","enum":["_parent_id"]},{"type":"string","enum":["created_at"]},{"type":"string","enum":["updated_at"]},{"type":"string","enum":["uid"]},{"type":"string","enum":["name"]},{"type":"string","enum":["transcription"]},{"type":"string","enum":["summary"]},{"type":"string","enum":["actions"]},{"type":"string","enum":["appointment_id"]}]},"in":"query","name":"sort_desc","required":false,"description":"Available values: _id, user_id, _parent_id, created_at, updated_at, uid, name, transcription, summary, actions, appointment_id"},{"schema":{"anyOf":[{"type":"string","enum":["_id"]},{"type":"string","enum":["user_id"]},{"type":"string","enum":["_parent_id"]},{"type":"string","enum":["created_at"]},{"type":"string","enum":["updated_at"]},{"type":"string","enum":["uid"]},{"type":"string","enum":["name"]},{"type":"string","enum":["transcription"]},{"type":"string","enum":["summary"]},{"type":"string","enum":["actions"]},{"type":"string","enum":["appointment_id"]}]},"in":"query","name":"sort_asc","required":false,"description":"Available values: _id, user_id, _parent_id, created_at, updated_at, uid, name, transcription, summary, actions, appointment_id"},{"schema":{"pattern":"^[a-z0-9]{24}$","type":"string"},"in":"path","name":"id","required":true}],"security":[{"apiKey":[]},{"providerSession":[]}],"responses":{"200":{"description":"Default Response","content":{"application/json":{"schema":{"type":"array","items":{"$ref":"#/components/schemas/QCRecord"}}}}},"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}}},"/appointments/{id}/records/{recordId}":{"get":{"tags":["appointments"],"description":"Get a record for the appointment","parameters":[{"schema":{"pattern":"^[a-z0-9]{24}$","type":"string"},"in":"path","name":"id","required":true},{"schema":{"pattern":"^[a-z0-9]{24}$","type":"string"},"in":"path","name":"recordId","required":true}],"security":[{"apiKey":[]},{"providerSession":[]}],"responses":{"200":{"description":"Default Response","content":{"application/json":{"schema":{"$ref":"#/components/schemas/QCRecord"}}}},"4XX":{"description":"Client error responses","content":{"application/json":{"schema":{"description":"Client error responses","$ref":"#/components/schemas/Error"}}}},"5XX":{"description":"Server error responses","content":{"application/json":{"schema":{"description":"Server error responses","$ref":"#/components/schemas/Error"}}}}}}}}}}')}}]);