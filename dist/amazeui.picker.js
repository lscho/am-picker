!function($,UI){
	"use strict";
	function picker(data){
		this.$element=data.element;
		this.option=data.option;
		this._init(this.$element,this.option);
		return this;
	}

	picker.prototype._init=function($element,option){
		if(option.url){
			$.getJSON(option.url,function(data){
				if(data.length>0){
					var option="";
			        for (var i in data){
			            option+='<option value="' + data[i].key +'">' + data[i].value + '</option>';
			        }
					$element.html(option);
				}
			});
		}
	}

	picker.prototype._on=function(){
		$(document).off('change','[data-am-picker]').on('change','[data-am-picker]',function(){
			var option = UI.utils.parseOptions($(this).attr('data-am-picker'));
			var value=$(this).val();
			if(option.next&&option.refurl){
				$(option.next).html("");
				$(option.next).picker({
					url:option.refurl.replace("%value%",value)
				});
			}
		});
	}

	$.fn.extend({
		'picker':function(option){
			return new picker({
				element:this,
				option:option
			});
		}
	});
	UI.ready(function(context) {
		$('[data-am-picker]', context).each(function(){
			var option = UI.utils.parseOptions($(this).attr('data-am-picker'));
			(new picker({
				element:$(this),
				option:option
			}))._on();
		})
	});
}(jQuery,jQuery.AMUI);