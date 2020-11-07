$(document).ready(function () {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

  $('#registerByEmailPassword').on('submit',async (event) => {
    event.preventDefault();
    try {
      const email = $('#email').val(),
            pwd   = $('#password').val();

      await firebase.auth().createUserWithEmailAndPassword(email, pwd);
      const user = firebase.auth().currentUser;

      if (!user.emailVerified) {
        user.sendEmailVerification();

        const data = {
          email,
          pwd
        }

        $.ajax({
          url: '/api/users/auth/email',
          data,
          type: 'POST',
          success: function(data) {
            console.log(data)
            alert('Register success. Please check your email to verify')
            window.location.href = '/login'
          }
        })

        return;
      }

      throw new Error("Your email has been registed")
    } catch (error) {
      alert(error);
    }
  });

  $('#singInEmailPwd').on('submit',async function(e) {
    e.preventDefault();
    
    try {
      const email     = $('#email').val(),
            pwd       = $('#password').val();

      await firebase.auth().signInWithEmailAndPassword(email, pwd);

      const user = firebase.auth().currentUser;
      console.log(user);
      if (user.emailVerified) {

        window.location.href = '/'
        return;
      }
      throw new Error("Your email chua duoc xac thuc")
    } catch (error) {
      alert(error)
    }

  
  })

  $('#login-phone-step1').on('submit',async function(e) {
    e.preventDefault();
    try {
      
      var phoneNumber = $('#phone').val();
      var appVerifier = window.recaptchaVerifier;
      const result = await firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier);

      $('#login-phone-step2').css('display', 'block');
      console.log(result);
      window.confirmationResult = result;
    } catch (error) {
      alert(error)
    }
  })

  $('#login-phone-step2').on('submit', async function(e) {
    e.preventDefault();

    try {
      var code = $('#code').val();

      const result = await confirmationResult.confirm(code);
  
      const user = result.user;
  
      if(user) {
        window.location.href = '/'
        return;
      }
      throw new Error('Code failed')
    } catch (error) {
      alert(error)
    }
  })
});
