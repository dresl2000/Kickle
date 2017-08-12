(function(){

kickleApp.component('talentList', {
  bindings: {
    items: '='
  },
  templateUrl: 'components/talent-list/talent-list.html',
  controller: ['$log', attributeListController]
});

 
function attributeListController($log: any) {
	

}

 
})();