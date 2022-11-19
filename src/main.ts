/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {

    WA.room.onEnterLayer('_Settings/zoneBuilding').subscribe(() => {
        WA.room.showLayer("Building/overlayBuilding");

        WA.room.hideLayer("Building/aboveBuilding3");
        WA.room.hideLayer("Building/aboveBuilding2");
        WA.room.hideLayer("Building/aboveBuilding1");
        WA.room.hideLayer("Building/Building2");
        WA.room.hideLayer("Building/Building1");
    })

    WA.room.onLeaveLayer('_Settings/zoneBuilding').subscribe(() => {
        WA.room.hideLayer("Building/overlayBuilding");
        
        WA.room.showLayer("Building/aboveBuilding3");
        WA.room.showLayer("Building/aboveBuilding2");
        WA.room.showLayer("Building/aboveBuilding1");
        WA.room.showLayer("Building/Building2");
        WA.room.showLayer("Building/Building1");
    })

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};
