/**
 * Form validation
 * Created by paulromijn on 28-06-14.
 *
 * Validate the section forms
 */



jQuery(document).ready(function ($) {

    var my_rules = $.parseJSON(formspree_vars.val_rules);
    var my_form = formspree_vars.form_id;

    function getFormData() {
        var obj = {};

        $.each(JSON.parse(formspree_vars.placeholders), function (index, value) {
            obj[value] = $('#' + index).val();
        });

        return obj;
    }

    $('#' + my_form).validate({
        focusInvalid: false,
        rules: my_rules,

        highlight: function (element) {
            jQuery(element).closest(".form-group").addClass('has-error');
        },
        success: function (element) {
            element.addClass('valid')
                .closest(".form-group").removeClass('has-error');
        },
        errorPlacement: function (error, element) {
            element.closest('.form-group').find('.help-block').html(error.text());
        },

        // Submits the form via Ajax when valid.
        submitHandler: function (form) {

            var form = document.querySelector('form.formspree');
            var data = new FormData(form);
            var req = new XMLHttpRequest();
            req.open(form.method, form.action);
            req.send(data)
            /*$.ajax({
                type: 'post',
                url: "https://formspree.io/" + formspree_vars.mailto,
                dataType: 'json',
                data: getFormData(),
                success: function (response) {
                    $('#' + my_form).hide();
                    $('#form-error').hide();
                    $('#form-success').show();
                },
                error: function (response) {
                    $('#form-error').show();
                }
            });
*/
            $('#' + my_form).hide();
            $('#form-error').hide();
            $('#form-success').show();

            return false; // required to block normal submit since you used ajax
        }

    });

});



