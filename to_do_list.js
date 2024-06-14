$(document).ready(
	function() {
		let task;
		$('#add').click(function() {
			// Получаем значение
			let toAdd = $('input[name=list_items]').val();
			
			if(toAdd == "") // Если значение в поле пустое, то ничего не делаем
				return false;
			
			//	Добавляем новый элемент в список
			 task = $('ol').append('<li>' + toAdd + '</li>');
			$('input[name=list_items]').val("");
			task.hide();
			
		});
		
		$('#show').on('click', function(){
			$('#message').show();
			setTimeout(function(){
				$('#message').hide();
			}, 2000);
			task.show();

		});
	});