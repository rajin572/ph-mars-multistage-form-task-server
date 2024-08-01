# SERVER For Mission To Mars

# Task For Web Developer Intern Position

# Programming Hero Multi-Stage Mars Visit Application Form Task Server

## Live Link:

Server Live Link: [Mission To Mars](https://multi-stage-form-ph-server.vercel.app/).

## Installation:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the website using `npm run dev`.

- API Endpoints:

  - POST `/api/v1/visitor`
    - Description: Creating a new Mars Visit post.
    - Request:
      ```json
      {
        "personalInfo": {
          "fullName": "Salman Khan",
          "dateOfBirth": "1980-05-25",
          "nationality": "India",
          "email": "salman@gmail.com",
          "phone": "45121348494"
        },
        "travelPreferences": {
          "departureDate": "2024-08-03",
          "returnDate": "2024-08-09",
          "accommodation": "Space Hotel",
          "specialRequests": ""
        },
        "healthAndSafety": {
          "healthDeclaration": "Yes",
          "emergencyContact": "45121348494",
          "medicalConditions": ""
        }
      }
      ```
    - Response:
      ```json
      {
        "success": true,
        "message": "Your Application Successfully Submited",
        "result": {
          "acknowledged": true,
          "insertedId": "65f2ca6c5b6b39e13c4884d2"
        }
      }
      ```
  - GET `/api/v1/visitors`
  - Description: Get All Mars Visitors.
    - Response:
      ```json
      {
        "success": true,
        "message": "Successfully Retrieve Visitors!",
        "data": []
      }
      ```

## Tecnology I have Used:

1.Node JS <br/> 2.Express JS <br/> 3. MongoDB <br/>
