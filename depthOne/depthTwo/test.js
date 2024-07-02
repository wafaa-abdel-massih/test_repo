import 'bootstrap';
import exp from 'constants';
import { describe, it } from "mocha";
import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import * as imaps from 'imap-simple';

const devName= "developer B"
const age= 22
const title= "QA"

for(let i=0; i<4; i++){
    console.log("developer name: "+devName+
    "/n and the age is: "+age+
    "/n and the title is : "+title)
}