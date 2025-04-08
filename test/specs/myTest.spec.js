import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', async() => {
    it('should login with valid credentials', async () => {
        await browser.url('https://www.geico.com/')
        await $('#ssp-service-zip').setValue('03280')
        await $('[data-product="auto"] .product-checkbox').click()
        await $('[data-modal-view="bundle_modal"]').click()
        const title = await browser.getTitle()
        expect(title).toEqual('An Insurance Company For Your Car And More | GEICO')
        console.log('===============>',title)
        console.log(await $('[data-product="auto"]').getAttribute('data-product'))
    })
})

