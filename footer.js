<script>

    let btns = document.getElementsByClassName('btns'); 
    Array.from(btns).forEach(tab => {
        tab.addEventListener('click', function () {
            Array.from(btns).forEach(btn => btn.classList.remove('underlined'));
            this.classList.add('underlined');
        });
    });

</script>
