const accounts_box = document.querySelectorAll('.accounts_box .box');
const searchform = document.querySelector('.search_form');

accounts_box.forEach(account => {
   account.onclick = () => {

      accounts_box.forEach(acc => {
         acc.setAttribute('aria-checked', false);
         acc.setAttribute('tabindex', -1);
      });
      
      account.setAttribute('aria-checked', true);
         account.setAttribute('tabindex', 0);
   }
   account.ondblclick = () => {
      account.setAttribute('aria-checked', false);
         account.setAttribute('tabindex', -1);
   }
})
searchform.onsubmit = e => {
   e.preventDefault();
}
searchform['search'].onkeyup = ({ target , code }) => {

   accounts_box.forEach(acc => {
      var accname = acc.querySelector('.content').textContent;
      var currentname = accname.toLowerCase();
      var val = target.value.toLowerCase();

      if (currentname.indexOf(val) >= 0) {
         acc.classList.remove('hidden_box');

         var re = accname.replace(new RegExp(val + '(?!([^<]+)?<)', 'gi'), `<span class="highlight">$&</span>`);
          acc.querySelector('.content').innerHTML = re;
      } else {
          acc.classList.add('hidden_box');
      }

   })

}