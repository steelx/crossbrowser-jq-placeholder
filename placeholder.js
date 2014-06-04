//placeholder for IE
$(function () {
    $(':input[placeholder]').each(function () {
        var $this = $(this);
        if ($this.val() === '') {
            $this.val($this.attr('placeholder'));
        }
        $this.focus(function () {
            if ($this.val() === $this.attr('placeholder')) {
                $this.val('');
            }
        });
        $this.blur(function () {
            if ($this.val() === '') {
                $this.val($this.attr('placeholder'));
            }
        });
    });
});
