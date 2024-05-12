$('.start').click(function () {
    $('.stage1').fadeOut();
    fire_modal('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/cake_modal.png', 'Let’s make a cake!', 'Since it’s your birthday, I find it only fitting that you get to make your own digital birthday cake. Start by making your cake mixture, then bake it in a digital oven and finally decorate. Have fun and happy birthday');
})

progress = 1;

$('.modal_content button').click(function () {
    progress++;
    close_modal(progress)
})

function close_modal(callback) {
    modal.css('transform', 'translateY(-50%) scale(0)')
    setTimeout(function () {
        $('.stage' + callback).fadeIn();
    }, 600)
}


function fire_modal(imgurl, title, content) {

    modal = $('.birthday_inner__modal');
    modal.find('h1').html(title);
    modal.find('img').attr('src', imgurl);
    modal.find('p').html(content);
    setTimeout(function () {
        modal.css('transform', 'translateY(-50%) scale(1)')
    }, 1000)


}


mixing = false;
mixtimes = 0;

$('.mixer').click(function () {
    if (mixing == false) {
        mixing = true
        mixtimes++;
        $('.mix_spoon img').addClass('move')
        setTimeout(function () {
            $('.mix_spoon img').removeClass('move')
            mixing = false;
        }, 1000)
    }
    if (mixtimes == 2) {
        $('.stage2').fadeOut();
        fire_modal('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/mix_modal.png', 'Mix successful!', 'Congratulations, the mixture is perfect! After pouring the mixture into a baking tin, it’s now time to put it in our digital oven for about 3 seconds. That should be enough time for a nice spongy base.');
    }

})

$('.tin').click(function () {
    $('.stage3').fadeOut();
    fire_modal('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/oven_modal.png', 'Bake successfull!', 'Yes! You are a master chef. The base is fully baked and looks super yummy. Now its time to combine this base with lots of other ingredients like jam, marmalade, chocolate and more.');
});
// $('.tin').draggable({
//     revert: true
// })
// $(".oven").droppable({
//     drop: function (event, ui) {
//         $('.stage3').fadeOut();
//         fire_modal('https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/oven_modal.png', 'Bake successfull!', 'Yes! You are a master chef. The base is fully baked and looks super yummy. Now its time to combine this base with lots of other ingredients like jam, marmalade, chocolate and more.');
//     }
// })

bases = 0;
fillings = 0;

$('.sponges .item_inner').click(function () {
    $('.sponges').addClass('inactive')
    $('.fillings').removeClass('inactive')
    t = $(this).attr('class').split(' ').pop();
    bases++
    if (bases < 6) {
        add_sponge(t)
    }
})

$('.fillings .item_inner').click(function () {
    $('.fillings').addClass('inactive')
    $('.sponges').removeClass('inactive')
    f = $(this).attr('class').split(' ').pop();
    fillings++
    if (fillings < 7) {
        add_filling(f)
    }
})

function add_sponge(t) {

    $('.cakemake').prepend('<div style="width:' + (200 - (bases * 20)) + 'px" class="sponge sponge-' + t + '"><div></div><div></div><div></div><div></div><div></div></div>')
    $('.sponges h5 span').html(bases)
}

$('.startagain').click(function () {
    $('.cakemake').html('<div class="base"></div>');
    bases = 0;
    fillings = 0;
    $('.sponges h5 span').html(bases)
    $('.fillings h5 span').html(fillings)
    $('.fillings').removeClass('inactive')
    $('.sponges').addClass('inactive')
})

function add_filling(f) {

    $('.cakemake').prepend('<div style="width:' + (200 - (bases * 20)) + 'px" class="filling filling-' + f + '"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>')
    $('.fillings h5 span').html(fillings)
}

function fin() {
    $('h1,h2,.options,.startagain,.add').fadeOut();

    setTimeout(function () {
        $('.cakemake').fadeIn()
        $('.cakemake').animate({
            'margin-top': '0px'
        })
    }, 1000)
    add_candle()
    $('svg').addClass('text')
}

function add_candle() {
    var stages = $('.cakemake > div').length;
    var h = (stages / 2) * 41 + 22 + 'px';
    console.log(stages)
    $('.cakemake').prepend('<div class="candle" ><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/candle.png" /></div>')
    $('svg').show()
    setTimeout(function () {
        $('.sa').fadeIn()
    }, 2200)

}

$('.add').click(function () {
    fin();
})

$('.sa').click(function () {
    window.location.reload();
})

function detectDevice() {
    document.querySelector('.mobile').style.display="none";

    let check = false;
    (function (a) {
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if (width < 767 || /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
            check = true;
        }
    })(navigator.userAgent || navigator.vendor || window.opera);
    // console.log({check});
    if(check){
        document.querySelector('.birthday').style.display="none";
        document.querySelector('.mobile').style.display="flex";
    }else{
        document.querySelector('.birthday').style.display="block";
        document.querySelector('.mobile').style.display="none";
    }
}

detectDevice();
document.querySelector('.mobile').style.display="none";
