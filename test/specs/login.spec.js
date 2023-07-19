const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");


let url = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Acessar Admin Painel', () => {
  it('should login whith valid credentials', async () => {
    await homeScreen.enterBtn()
    await loginScreen.siteAddress(url)
    await loginScreen.continueWithCreditialsBtn()
    await loginScreen.logineEditText(usuario, senha)
    await loginScreen.goToSecondFactorBtn(senha)

    expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
    expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')
  });

});