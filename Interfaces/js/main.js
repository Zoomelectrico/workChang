(function () {
  const nav = document.querySelector('.sidenav');
  const navInstance = M.Sidenav.init(nav);

  const datepicker = document.querySelector('.datepicker');
  if (datepicker) {
    const datepickerInstance = M.Datepicker.init(datepicker);
  }

  const select = document.querySelector('select');
  if (select) { 
    const selectInstance = M.Select.init(select);
  }

  const selectMultiple = document.getElementById('select-multiple');
  if (selectMultiple) {
    const selectMultipleInstance = M.Select.init(selectMultiple);    
  }
  
  const fab = document.querySelector('.fixed-action-btn');
  if (fab) {
    const fabInstance = M.FloatingActionButton.init(fab);
  }
  
})();