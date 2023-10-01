"use strict";
var KTModalNewTarget = function () {

    var t, e, n, a, o, i;
    return {
        init: function () {
            (i = document.querySelector("#kt_modal_new_target")) && (o = new bootstrap.Modal(i), a = document.querySelector("#kt_modal_new_target_form"), t = document.getElementById("kt_modal_new_target_submit"), e = document.getElementById("kt_modal_new_target_cancel"), tagify_obj = new Tagify(a.querySelector('[name="tags"]')).on("change"), $(a.querySelector('[name="due_date"]')).flatpickr({
                enableTime: !0,
                dateFormat: "d, M Y, H:i"
            }), n = FormValidation.formValidation(a, {
                fields: {
                    target_title: {
                        validators: {
                            notEmpty: {
                                message: "Target title is required"
                            }
                        }
                    },
                    target_assign: {
                        validators: {
                            notEmpty: {
                                message: "Target assign is required"
                            }
                        }
                    },
                    target_due_date: {
                        validators: {
                            notEmpty: {
                                message: "Target due date is required"
                            }
                        }
                    },
                    target_tags: {
                        validators: {
                            notEmpty: {
                                message: "Target tags are required"
                            }
                        }
                    },
                    "targets_notifications[]": {
                        validators: {
                            notEmpty: {
                                message: "Please select at least one communication method"
                            }
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger,
                    bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: ".fv-row",
                        eleInvalidClass: "",
                        eleValidClass: ""
                    })
                }
            }))
        }
    }
}();
KTUtil.onDOMContentLoaded((function () {
    KTModalNewTarget.init()
}));