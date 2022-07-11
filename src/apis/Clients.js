import Axios from 'axios';

const baseUrl = 'https:/localhost:7227';

export async function submitLoginApi (emailInput, passwordInput) {
  const response = await Axios.post(`${baseUrl}/api/Client/Login`, {
    email: emailInput,
    password: passwordInput
  })
    .then((result) => {
      localStorage.setItem('loggedClient', JSON.stringify(result.data));

      window.location.href = 'http://localhost:3000';
    })
    .catch((error) => {
      if (error.response.status === 400) {
        return error.response.data;
      }
    });

  return response;
}

export async function submitLogoutApi (emailInput) {
  await Axios.post(`${baseUrl}/api/Client/Logout`, {
    email: emailInput
  })
    .then((result) => {
      localStorage.removeItem('loggedClient');

      window.location.href = 'http://localhost:3000';
    })
    .catch((error) => {
      //console.log(error.response.data)
    });
}

export async function submitSignupApi (
  firstnameInput, lastnameInput, emailInput, passwordInput,
  dayofbirthInput, monthofbirthInput, yearofbirthInput, genderInput) {
  const response = await Axios.post(`${baseUrl}/api/Client/Signup`, {
    firstname: firstnameInput,
    lastname: lastnameInput,
    email: emailInput,
    password: passwordInput,
    genre: genderInput,
    yearofbirth: yearofbirthInput,
    monthofbirth: monthofbirthInput,
    dayofbirth: dayofbirthInput
  })
    .then((result) => {
      window.location.href = 'http://localhost:3000';
    })
    .catch((error) => {
      if (error.response.status === 400) {
        return error.response.data;
      }
    });

  return response;
}

export async function submitCharacteristicsApi (languageInput, currencyInput) {
  if (JSON.parse(localStorage.getItem('loggedClient'))) {
    const obj = JSON.parse(localStorage.getItem('loggedClient'));

    const response = await Axios.put(`${baseUrl}/api/Client/Edit`, {
      id: obj.user.id,
      currancy: currencyInput,
      language: languageInput
    })
      .then((result) => {
        obj.user.currancy = currencyInput;
        obj.user.language = languageInput;

        localStorage.setItem('loggedClient', JSON.stringify(obj));

        window.location.href = 'http://localhost:3000';
      })
      .catch((error) => {
        if (error.response.status === 400) {
          return error.response.data;
        }
      });

    return response;
  } else {
    const obj = JSON.parse(localStorage.getItem('guestClient'));

    obj.user.currancy = currencyInput;
    obj.user.language = languageInput;

    localStorage.setItem('guestClient', JSON.stringify(obj));

    window.location.assign('http://localhost:3000/');
  }
}

export async function submitAccountInfoApi (idInput, emailInput, passwordInput) {
  if (JSON.parse(localStorage.getItem('loggedClient'))) {
    const response = await Axios.put(`${baseUrl}/api/Client/Edit`, {
      id: idInput,
      email: emailInput,
      password: passwordInput
    })
      .then((result) => {
        const obj = JSON.parse(localStorage.getItem('loggedClient'));

        obj.user.email = emailInput;

        localStorage.setItem('loggedClient', JSON.stringify(obj));

        window.location.href = 'http://localhost:3000/myProfile';
      })
      .catch((error) => {
        if (error.response.status === 400) {
          return error.response.data;
        }
      });

    return response;
  }
}

export async function submitPersonalInfoApi (
  idInput, firstnameInput, lastnameInput, imgeInput, firstphoneInput, 
  secondphoneInput, genderInput, streetnameInput, apartmentInput, cityInput, 
  zipcodeInput, stateInput, yearInput, monthInput, dayInput) {
  if (JSON.parse(localStorage.getItem('loggedClient'))) {
    const response = await Axios.put(`${baseUrl}/api/Client/Edit`, {
      id: idInput,
      firstName: firstnameInput,
      lastName: lastnameInput,
      genre: genderInput,
      yearOfBirth: yearInput,
      monthOfBirth: monthInput,
      dayOfBirth: dayInput,

      phoneDtos: [
        {
          phoneNumber: firstphoneInput,
          clientId: idInput
        },
        {
          phoneNumber: secondphoneInput,
          clientId: idInput
        }
      ],
      addressDtos: [
        {
          streetName: streetnameInput,
          city: cityInput,
          zipCode: zipcodeInput,
          state: stateInput,
          department: apartmentInput,
          clientId: idInput
        }
      ]

    })
      .then((result) => {
        const obj = JSON.parse(localStorage.getItem('loggedClient'));

        obj.user.firstName = firstnameInput;
        obj.user.lastName = lastnameInput;
        // obj.user.imagepath= img;
        obj.user.genre = genderInput;
        obj.user.yearOfBirth = yearInput;
        obj.user.monthOfBirth = monthInput;
        obj.user.dayOfBirth = dayInput;

        obj.user.addressDtos[0].streetName = streetnameInput;
        obj.user.addressDtos[0].city = cityInput;
        obj.user.addressDtos[0].state = stateInput;
        obj.user.addressDtos[0].zipCode = zipcodeInput;
        obj.user.addressDtos[0].department = apartmentInput;

        obj.user.phoneDtos[0].phoneNumber = firstphoneInput;

        localStorage.setItem('loggedClient', JSON.stringify(obj));

        window.location.href = 'http://localhost:3000/myProfile';
      })
      .catch((error) => {
        if (error.response.status === 400) {
          return error.response.data;
        }
      });

    return response;
  }
}

export function submitWalletInformationApi (id, creditcard, creditcardowner,
  expdate, securitycode) {
  if (JSON.parse(localStorage.getItem('loggedClient'))) {

    // submit to the api

  }
}

export async function submitDeleteAccountApi (emailInput) {
  if (JSON.parse(localStorage.getItem('loggedClient'))) {
    const response = await Axios.post(`${baseUrl}/api/Client/Signout`, {
      email: emailInput
    })
      .then((result) => {
        localStorage.removeItem('loggedClient');

        window.location.href = 'http://localhost:3000';
      })
      .catch((error) => {
        if (error.response.status === 400) {
          return error.response.data;
        }
      });

    return response;
  }
}

export async function submitAppearanceApi (appearanceInput) {
  if (JSON.parse(localStorage.getItem('loggedClient'))) {
    const obj = JSON.parse(localStorage.getItem('loggedClient'));

    const response = await Axios.put(`${baseUrl}/api/Client/Edit`, {
      id: obj.user.id,
      appearance: appearanceInput
    })
      .then((result) => {
        obj.user.appearance = appearanceInput;

        localStorage.setItem('loggedClient', JSON.stringify(obj));

        // window.location.href = "http://localhost:3000/myProfile";
      })
      .catch((error) => {
        if (error.response.status === 400) {
          return error.response.data;
        }
      });

    return response;
  } else {
    const obj = JSON.parse(localStorage.getItem('guestClient'));

    obj.characteristics.appearance = appearanceInput;

    localStorage.setItem('guestClient', JSON.stringify(obj));

    window.location.assign('http://localhost:3000/');
  }
}
