(function () {
	"use strict";
	/*global sap, jQuery */

	/**
	 * @fileOverview Application component to display information on entities from the GWSAMPLE_BASIC
	 *   OData service.
	 * @version @version@
	 */
	jQuery.sap.declare("com.fiorielements.overviewpage.fiorielements_overviewpage.Component");

	jQuery.sap.require("sap.ovp.app.Component");

	sap.ovp.app.Component.extend("com.fiorielements.overviewpage.fiorielements_overviewpage.Component", {
		metadata: {
			manifest: "json"
		}
	});
}());