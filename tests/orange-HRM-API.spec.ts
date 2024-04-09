import { test, expect } from '@playwright/test';

test('Verify login Status', async ({ request }) => { // This API will verify the Login Status
    const requestBody = {
        username: "Admin",
        password: "admin123",
        _token: "022bc0b80a5b42.rQMHWzUSDb1XXSJrIMlQRvwfgBLqi9iVTB3ylobs5eY.lDQzDHF3TI8gCA8AZ709cLEv2mS5wu3ef3XGpszYo5f9cUw_Z1117Rwnaw"
    };

    const response = await request.post('https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: requestBody
    });

    // Verify response status
    expect(response.status()).toBe(200);

});


test('Get Employee Request', async ({ request }) => { // This API will verify the Get Employees 
    try {
         await request.get('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees', {
            headers: {
                'Authorization': `Bearer ${"022bc0b80a5b42.rQMHWzUSDb1XXSJrIMlQRvwfgBLqi9iVTB3ylobs5eY.lDQzDHF3TI8gCA8AZ709cLEv2mS5wu3ef3XGpszYo5f9cUw_Z1117Rwnaw"}`,
                'Content-Type': 'application/json'
            }
        });

    } catch (error) {

        expect(error.status()).toBe(401); // this  will verify the error status
    }
});

test('Search Employee', async ({ request }) => { // This API will search the Employee
    
    let response;
    try {
        response = await request.get('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?nameOrId=Amelia&includeEmployees=onlyCurrent', {
            headers: {
                'Authorization': `Bearer ${"022bc0b80a5b42.rQMHWzUSDb1XXSJrIMlQRvwfgBLqi9iVTB3ylobs5eY.lDQzDHF3TI8gCA8AZ709cLEv2mS5wu3ef3XGpszYo5f9cUw_Z1117Rwnaw"}`,
                'Content-Type': 'application/json'
            }
        });
        expect(response.status()).toBe(200)
    } catch (error) {
        expect(response.status()).toBe(401)
        //console.error(error)

    }
});


test('Add Employee Data ', async ({ request }) => { // This API will verify the Employee Details 
    try {
        const employeeData = {
            firstName: 'CSAB',
            lastName: 'Josh',

        };

        const response = await request.post('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees', {
            headers: {
                'Authorization': `Bearer ${"022bc0b80a5b42.rQMHWzUSDb1XXSJrIMlQRvwfgBLqi9iVTB3ylobs5eY.lDQzDHF3TI8gCA8AZ709cLEv2mS5wu3ef3XGpszYo5f9cUw_Z1117Rwnaw"}`,
                'Content-Type': 'application/json'
            },
            data: employeeData
        });

    }
    // Verify response status

    catch (error) {

       expect(error.status()).toBe(405); // this  will verify the error status

    }

});


test('Log Out', async ({ request }) => { // This API will check the Log out status
    try {
        const response = await request.get('https://opensource-demo.orangehrmlive.com/web/index.php/auth/logout', {
            headers: {
                'Authorization': `Bearer ${"022bc0b80a5b42.rQMHWzUSDb1XXSJrIMlQRvwfgBLqi9iVTB3ylobs5eY.lDQzDHF3TI8gCA8AZ709cLEv2mS5wu3ef3XGpszYo5f9cUw_Z1117Rwnaw"}`,
                'Content-Type': 'application/json'
            }
        });
        expect(response.status()).toBe(302)
    } catch (error) {
    }
});


