﻿$('#save-userfield-button').on('click', function(e)
{
	e.preventDefault();

	var jsonData = $('#userfield-form').serializeJSON();
	Grocy.FrontendHelpers.BeginUiBusy("userfield-form");

	if (Grocy.EditMode === 'create')
	{
		Grocy.Api.Post('objects/userfields', jsonData,
			function(result)
			{
				window.location.href = U('/userfields');
			},
			function(xhr)
			{
				Grocy.FrontendHelpers.EndUiBusy("userfield-form");
				Grocy.FrontendHelpers.ShowGenericError('Error while saving, probably this item already exists', xhr.response)
			}
		);
	}
	else
	{
		Grocy.Api.Put('objects/userfields/' + Grocy.EditObjectId, jsonData,
			function(result)
			{
				window.location.href = U('/userfields');
			},
			function(xhr)
			{
				Grocy.FrontendHelpers.EndUiBusy("userfield-form");
				Grocy.FrontendHelpers.ShowGenericError('Error while saving, probably this item already exists', xhr.response)
			}
		);
	}
});

$('#userfield-form input').keyup(function(event)
{
	Grocy.FrontendHelpers.ValidateForm('userfield-form');
});

$('#userfield-form select').change(function(event)
{
	Grocy.FrontendHelpers.ValidateForm('userfield-form');
});

$('#userfield-form input').keydown(function(event)
{
	if (event.keyCode === 13) //Enter
	{
		event.preventDefault();

		if (document.getElementById('userfield-form').checkValidity() === false) //There is at least one validation error
		{
			return false;
		}
		else
		{
			$('#save-userfield-button').click();
		}
	}
});

$('#entity').focus();

if (typeof GetUriParam("entity") !== "undefined")
{
	$("#entity").val(GetUriParam("entity"));
	$("#entity").trigger("change");
	$('#name').focus();
}

Grocy.FrontendHelpers.ValidateForm('userfield-form');