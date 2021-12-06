## Following routes are used, We need to change Bearer toke after doctor login

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
