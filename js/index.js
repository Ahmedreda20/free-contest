const accounts_box = document.querySelectorAll('.accounts_box .box');

accounts_box.forEach(account => {
   account.onclick = () => {

      accounts_box.forEach(acc => {
         acc.setAttribute('aria-checked', false);
         acc.setAttribute('tabindex', -1);
      });
      
      account.setAttribute('aria-checked', true);
         account.setAttribute('tabindex', 0);
   }
})