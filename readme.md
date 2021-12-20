## Theme:
1) This API is designed for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of  COVID-19 patients
2) There can be 2 types of Users
   a) Doctors
   b) Patients
3) Doctors can log in
4) Each time a patient visits, the doctor will follow 2 steps
   a) Register the patient in the app (using phone number, if the patient already exists, just return the patient info in the API)
   b) After the checkup, create a Report
5) Patient Report have the following fields
   a) Created by doctor
   b) Status Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit]
   c) Date

## Required Routes
1) /doctors/register
2) /doctors/login
3) /patients/register 
4) /patients/:id/create_report
5) /patients/:id/all_reports
6) /reports/:status

# This app is hosted on heroku.com anyone can make request using applications like POSTMAN
APP url: https://hospital-api-v.herokuapp.com/
example url: https://hospital-api-v.herokuapp.com/api/v1/doctors/register

## Following routes are used, We need to change Bearer token after doctor login

## 1 create doctors

POST http://localhost:8000/api/v1/doctors/register HTTP/1.1
Content-Type: application/x-www-form-urlencoded

name= testDr
&email=testDr@gmail.com
&password=1234

## 2 Fetch JWT token after login of Doctor.

POST http://localhost:8000/api/v1/doctors/login HTTP/1.1
Content-Type: application/x-www-form-urlencoded

&email=testDr@gmail.com
&password=1234

## 3 Register a patient

POST http://localhost:8000/api/v1/patients/register HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWFkNmQwNDQxMmNiYzM4YjAyMmFmYWMiLCJuYW1lIjoiYmFidSBiaGFpIiwiZW1haWwiOiJiQGIiLCJwYXNzd29yZCI6ImJiIiwiX192IjowLCJpYXQiOjE2Mzg3NTg1MjgsImV4cCI6MTYzOTc1ODUyOH0.r-M1X0WNinpM2m26owJRXuKg-iJc1H3JNsuJmKm1UnU

name=testPatient
&email=testPatient@gmail.com
&phoneNo=81686

## 4 create Report

POST http://localhost:8000/api/v1/patients/:id/create_report HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzM2YmZjYmZmMzYxMTFjNDUwOWFkNCIsImVtYWlsIjoiYUBhIiwibmFtZSI6ImFhcnRpIiwiYXZhdGFyIjoiL3VwbG9hZHMvdXNlcnMvYXZhdGFycy9hdmF0YXItMTYzNTMxMDkyMTAwOCIsImFib3V0IjoiaSBhbSBkb2luZyBtYmJzIGJ1dCBkcCBpcyBub3QgbWluZS4iLCJpYXQiOjE2MzUzNDQyNzMsImV4cCI6MTYzNTM1MDI3M30.ja7gwRj6NsbDHDvlvkglMBA4uakQ8qmRqzaDci45Uok
status=Negative

## 5 All reports of patient

GET http://localhost:8000/api/v1/patients/:id/all_reports HTTP/1.1
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzM2YmZjYmZmMzYxMTFjNDUwOWFkNCIsImVtYWlsIjoiYUBhIiwibmFtZSI6ImFhcnRpIiwiYXZhdGFyIjoiL3VwbG9hZHMvdXNlcnMvYXZhdGFycy9hdmF0YXItMTYzNTMxMDkyMTAwOCIsImFib3V0IjoiaSBhbSBkb2luZyBtYmJzIGJ1dCBkcCBpcyBub3QgbWluZS4iLCJpYXQiOjE2MzUzNDQyNzMsImV4cCI6MTYzNTM1MDI3M30.ja7gwRj6NsbDHDvlvkglMBA4uakQ8qmRqzaDci45Uok

## 6 Fetch report by status

GET http://localhost:8000/api/v1/reports/:status HTTP/1.1
Content-Type: application/json
Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzM2YmZjYmZmMzYxMTFjNDUwOWFkNCIsImVtYWlsIjoiYUBhIiwibmFtZSI6InNoeWFtIiwiYWJvdXQiOiJ0aGlzIGlzIHNvIGNvb2wga2kgYmFyYmggYmhpIGptYSBkZXRhIGh1LiIsImlhdCI6MTYzNTA0NDEwNCwiZXhwIjoxNjM1MDUwMTA0fQ.th2yr_xggozrwia5iWOA2adMi8LQ4WjeXOwFnMV1uMw
