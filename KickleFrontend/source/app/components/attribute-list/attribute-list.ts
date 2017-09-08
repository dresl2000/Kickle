module.exports = function(kickleApp) {

kickleApp.component('attributeList', {
  bindings: {
    items: '='
  },
  templateUrl: 'app/components/attribute-list/attribute-list.html',
  controller: ['$log', attributeListController]
});

 
function attributeListController($log) {
	

}

 
}