/// <reference types="Cypress" />

const { should } = require("chai");

describe('GET API Test for Rest', () => {

    it('GET request', () => {
        cy.request(
          "https://coast.noaa.gov/hurricanes/tiles/spatial.segments.json"
        ).then((res) =>{
           
            console.log(res)
            expect(res.status).equal(200);
            expect(res.body.tiles[0]).has.property("https://coast.noaa.gov:443/hurricanes/tiles/spatial.segments/{z}/{x}/{y}.pbf")




        })


    
});
})
