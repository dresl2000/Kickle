module.exports = function(kickleApp) {

kickleApp.component('attributeList', {
  bindings: {
    items: '='
  },
  templateUrl: 'components/attribute-list/attribute-list.html',
  controller: ['$log', attributeListController]
});

 
function attributeListController($log) {
	

}

 
}