({
    addStockVehicules : function(component, event, helper) {
        var userInput = component.find('input').getElement().value;
              
        var appevent =$A.get("e.c:insertIntoStock");
        appevent.setParams({"input":userInput});
        console.log("disparando evento:"+userInput);
        appevent.fire()
    }
})
