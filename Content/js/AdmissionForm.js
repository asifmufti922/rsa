var validateValue = 0;
function validateForm() {
    validateValue = 0;
    debugger
    var cellNo = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if ($('#name').val() == '') {
        $('#name').css('border-color', 'red');
        validateValue = 1;
    }
    else {
        $('#name').css('border-color', '');
    }
    if ($('#fatherName').val() == '') {
        $('#fatherName').css('border-color', 'red');
        validateValue = 1;
    }
    else {
        $('#fatherName').css('border-color', '');
    }
    if ($('#contactNo').val() == '') {
        $('#contactNo').css('border-color', 'red');
        validateValue = 1;
    }
    else {
        $('#contactNo').css('border-color', '');
    }
    if ($('#contactNo').val().match(cellNo)) {
        $('#contactNo').css('border-color', '');
    }
    else {
        $('#contactNo').css('border-color', 'red');
        validateValue = 1;
        alert("Enter Contact No. in correct formate")
    }
    if ($('#campus').val() == '') {
        $('#campus').css('border-color', 'red');
        validateValue = 1;
    }
    else {
        $('#campus').css('border-color', '');
    }
    if ($('#class').val() == '') {
        $('#class').css('border-color', 'red');
        validateValue = 1;
    }
    else {
        $('#class').css('border-color', '');
    }
}
$("#addAdmission").click(function () {
    debugger
    validateForm();
    if (validateValue == 0) {
        var formData = new FormData();
        formData.append("Name", $("#name").val());
        formData.append("FatherName", $("#fatherName").val());
        formData.append("ContactNo", $("#contactNo").val());
        formData.append("Class", $("#class").val());
        formData.append("Campus", $("#campus").val());
        $.ajax({
            url: "/AdmissionForm/AddAdmissionForm",
            type: "POST",
            cache: false,
            contentType: false,
            processData: false,
            data: formData,
            success: function (response) {
                alert(response);
                if (response == 'Record saved successfully') {
                    location.reload();
                }
            }
        });
    }
    else {
        return false;
    }
});
$(function () {
    debugger
    GetCampus();
    GetAdmissionFormList();
})
function GetCampus() {
    debugger
    $.ajax({
        url: "/AdmissionForm/GetCampus",
        type: "GET",
        cache: false,
        contentType: false,
        processData: false,
        success: function (response) {
            var data = JSON.parse(response);
            var option = '';
            debugger
            if (data != null) {
                $.each(data, function (key, item) {
                    option += '<option value="' + item.SerialNo + '">' + item.CampusName + '</option>';
                });
                $('#campus').append(option);
                option = '';
            }
        }
    });
}
//$(function () {
//    GetAdmissionFormList();
//})
function GetAdmissionFormList() {
    debugger
    $.ajax({
        url: "/AdmissionForm/AdmissionFormList",
        type: "GET",
        cache: false,
        contentType: false,
        processData: false,
        success: function (response) {
            debugger
            var data = JSON.parse(response);
            var admissionForm = '';
            $.each(data, function (key, item) {
                admissionForm += '<tr><td>' + item.SerialNo + '</td><td>' + item.Name + '</td><td>' + item.FatherName + '</td><td>' + item.ContactNo + '</td><td>' + item.Class + '</td><td>' + item.CampusID + '</td><td>' + item.CampusName + '</td></tr>';
            });
            $('#tblBody').append(admissionForm);
            $('#admissionForm').DataTable();
        }
    });
}
function ClearFields() {
    location.reload();
    //$("#name").val('');
    //$("#fatherName").val('');
    //$("#contactNo").val('');
    //$("#class").val('');
    //$("#campus").val('');
    //$('#name').css('border-color', '');
    //$('#fatherName').css('border-color', '');
    //$('#contactNo').css('border-color', '');
}

    $("#clearAdmission").click(function () {
    debugger
    ClearFields()
});