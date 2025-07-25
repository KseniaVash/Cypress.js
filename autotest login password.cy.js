describe('Проверка авторизации', function () {
       
    beforeEach('Начало теста', function () {
         cy.visit('https://login.qa.studio/');
         });
    
    it ('Верный логин и верный пароль', function () {
        cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажали войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяем, что после авт. видим текст
        cy.get('#messageHeader').should('be.visible'); //Есть текст и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден пользователю   
});


 it ('Верный логин и неверный пароль', function () {
        cy.get('#mail').type('german@dolnikov.ru'); //Ввели верный логин
        cy.get('#pass').type('iLoveqastudio5'); //Ввели неверный пароль
        cy.get('#loginButton').click(); //Нажали войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяем, что после авт. видим текст
        cy.get('#messageHeader').should('be.visible'); //Есть текст и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден пользователю   
});

it ('Проверка на наличие в логине @', function () {
        cy.get('#mail').type('germandolnikov.ru'); //Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажали войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяем, что после авт. видим текст
        cy.get('#messageHeader').should('be.visible'); //Есть текст и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден пользователю   
});

it ('Проверка восстановления пароля', function () {
        cy.get('#forgotEmailButton').click(); //Нажали восстановить пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); //Ввели почту для восстановления пароля
        cy.get('#restoreEmailButton').click(); //Нажали кнопку отправить код

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяем, что после авт. видим текст
        cy.get('#messageHeader').should('be.visible'); //Есть текст и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден пользователю   
});
it ('Проверка на приведение к строчным буквам в логине', function () {
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //Ввели логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажали войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяем, что после авт. видим текст
        cy.get('#messageHeader').should('be.visible'); //Есть текст и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден пользователю   
});
it ('Проверка с неправильным логином и правильным паролем', function () {
        cy.get('#mail').type('german@dolniko.ru'); //Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); //Ввели верный пароль
        cy.get('#loginButton').click(); //Нажали войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяем, что после авт. видим текст
        cy.get('#messageHeader').should('be.visible'); //Есть текст и он виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Есть крестик и он виден пользователю   
});
});


