
// var homeHeight = document.querySelector('#home').scrollHeight;
// var aboutHeight = document.querySelector('#about').scrollHeight;
// var skillsHeight = document.querySelector('#skills').scrollHeight;
// var servicesHeight = document.querySelector('#services').scrollHeight;
// var portfolioHeight = document.querySelector('#portfolio').scrollHeight;
// // var contactHeight = document.querySelector('#contact').scrollHeight;

// let scroll = ()=>{
//     window.addEventListener("scroll", function(){
//         var yoffset = window.pageYOffset;
//         if(yoffset<=homeHeight-200){
//             var target = document.querySelector('nav a[href="#home"]');
//             target.classList.add('active');
//         }
//         else{
//             var target = document.querySelector('nav a[href="#home"]');
//             target.classList.remove('active');
//         }

//         if(yoffset<=(homeHeight+aboutHeight-200)&&yoffset>homeHeight-200){
//             var target = document.querySelector('nav a[href="#about"]');
//             target.classList.add('active');
//         }
//         else{
//             var target = document.querySelector('nav a[href="#about"]');
//             target.classList.remove('active');
//         }
//         if(yoffset<=(homeHeight+aboutHeight+skillsHeight-200)&&yoffset>(homeHeight+aboutHeight-200)){
//             var target = document.querySelector('nav a[href="#skills"]');
//             target.classList.add('active');
//         }
//         else{
//             var target = document.querySelector('nav a[href="#skills"]');
//             target.classList.remove('active');
//         }
//         if(yoffset<=(homeHeight+aboutHeight+skillsHeight+servicesHeight-200)&&(yoffset>(homeHeight+aboutHeight+skillsHeight-200))){
//             var target = document.querySelector('nav a[href="#services"]');
//             target.classList.add('active');
//         }
//         else{
//             var target = document.querySelector('nav a[href="#services"]');
//             target.classList.remove('active');
//         }
//         if(yoffset<=(homeHeight+aboutHeight+skillsHeight+servicesHeight+portfolioHeight-200)&&(yoffset>(homeHeight+aboutHeight+skillsHeight+servicesHeight-200))){
//             var target = document.querySelector('nav a[href="#portfolio"]');
//             target.classList.add('active');
//         }
//         else{
//             var target = document.querySelector('nav a[href="#portfolio"]');
//             target.classList.remove('active');
//         }
//         // if(yoffset<=(homeHeight+aboutHeight+skillsHeight+servicesHeight+portfolioHeight+contact-200)&&(yoffset>(homeHeight+aboutHeight+skillsHeight+servicesHeight+portfolioHeight-200))){
//         //     var target = document.querySelector('nav a[href="#contact"]');
//         //     target.classList.add('active');
//         // }
//         // else{
//         //     var target = document.querySelector('nav a[href="#contact"]');
//         //     target.classList.remove('active');
//         // }
//     })
// };

// scroll();



(()=>{
    window.addEventListener('scroll',()=>{
        var arr = ['home','about','skills','services','portfolio','contact'];
        arr.forEach((value)=>{
            var getoffset = document.querySelector(`#${value}`).offsetTop;
            var getheight = document.querySelector(`#${value}`).scrollHeight;
            var pageYoffset = window.pageYOffset;
            if(pageYoffset<getheight+getoffset-50&&pageYoffset>getoffset-50){
                document.querySelector(`nav a[href="#${value}"]`).classList.add('active');
            }else{
                document.querySelector(`nav a[href="#${value}"]`).classList.remove('active');
            }
        })
    })
})();
