//点击查看页链接
function getViewUrl(val, rec) {
	var value = (val || "");// 选取内容
	var clickFun = "openView('" + rec.guid + "');return false;";// 调用ONCLICK方法
	return "<a href='javascript:void(0);' title='" + value + "' onclick=\""
			+ clickFun + "\">" + value + "</a>";// 格式化内容
}

// 返回列表页面
function doBack() {
	closeIFrameDialog();
}

// 打开新建界面
function openAdd(status) {
	openIFrameDialog("add");
}

// 打开查看页面
function openView(guid) {
	openIFrameDialog("view?guid=" + guid);
}

// 打开修改页面
function openEdit(guid) {
	window.location.href = "edit?guid=" + guid;
}

// 修改后，跳转查看页面
function changeToView(guid) {
	window.location.href = "view?guid=" + guid;
}

// 执行保存按钮
function saveAddUser() {
	if (!check(fm)) {
		return;
	}

	layer.confirm('确定保存信息吗？', function(index) {
		// 添加操作
		$('#fm').form('submit', {
			url : 'insert',
			contentType : 'application/json',
			type : "POST",
			success : function(data) {
				var ret = eval('(' + data + ')');
				if (ret.success) {
					changeToView(ret.message);
				} else {
					layer.alert('添加失败！');
				}
			}
		});

		layer.close(index);
	});
}

// 执行打开修改页后的保存按钮
function saveUpdateUser(guid) {
	if (!check(fm)) {
		return;
	}

	layer.confirm('确定保存信息吗？', function(index) {
		// 添加操作
		$('#fm').form('submit', {
			url : 'update',
			contentType : 'application/json',
			type : "POST",
			success : function(data) {
				var ret = eval('(' + data + ')');
				if (ret.success) {
					changeToView(guid);
				} else {
					layer.alert('修改信息失败！');
				}
			}
		});

		layer.close(index);
	});
}

// 列表批量删除
function deleteList() {
	var rows = $('#grid').datagrid('getChecked');
	if (rows.length == 0) {
		layer.alert('没有选中项！');
		return;
	}

	layer.confirm('确定将选中的账号删除吗？', function(index) {
		var jsonText = JSON.stringify(rows);
		$.ajax({
			type : "POST",
			url : "deletelist",
			data : jsonText,
			contentType : 'application/json',
			success : function(data) {
				var ret = eval('(' + data + ')');
				if (ret.success) {
					$("#grid").datagrid("reload");
					$("#grid").datagrid("acceptChanges");
				} else {
					layer.alert('删除失败！');
				}
			}
		});

		layer.close(index);
	});
}

// 查看页删除
function deleteOne(guid) {
	layer.confirm('确定删除选中项吗？', function(index) {
		$.post("deleteOne", {
			"guid" : guid
		}, function(data) {
			var ret = eval('(' + data + ')');
			if (ret.success) {
				doBack();
			} else {
				layer.alert('删除失败！');
			}
		});

		layer.close(index);
	});
}

// 打开充值页
function openCharge(guid) {
	var html = [
			'<table class="tablebgcolor" cellspacing="1" cellpadding="2" width="100%" align="center" border="0">',
			'<tbody>',
			'<tr>',
			'<td class="lefttdbgcolor" style="width: 30%;"><font color="#ff0000">*</font>充值金额：</td>',
			'<td class="tdbgcolor" style="width: 70%;"><input class="str form-money" /></td>',
			'</tr>',
			'<tr>',
			'<td class="lefttdbgcolor" style="width: 30%;"><font color="#ff0000">*</font>备注说明：</td>',
			'<td class="tdbgcolor" style="width: 70%;"><textarea class="form-content" style="width: 100%;" rows="4" cols="10"></textarea></td>',
			'</tr>', '</tbody>', '</table>' ].join('');
	layer.open({
		type : 1,
		title : '充值',
		shade : [ 0.6, '#F5F5F5' ],
		area : [ '400px', '200px' ],
		btn : [ '充值', '关闭' ],
		content : html,
		success : function(layero, index) {
			layero.find('.form-money').focus();
		},
		yes : function(index, layero) {
			var money = layero.find('.form-money').val();
			var content = layero.find('.form-content').val();

			if (money === "") {
				layer.alert('充值金额必填！');
				return;
			} else if (!money.isPlus()) {
				layer.alert('充值金额需要是正数！');
				return;
			}
			if (content === "") {
				layer.alert('备注说明必填！');
				return;
			}

			$.post("charge", {
				"guid" : guid,
				"money" : money,
				"content" : content
			}, function(data) {
				var ret = eval('(' + data + ')');
				if (ret.success) {
					window.location.reload();
				} else {
					layer.alert('充值失败！');
				}

				layer.close(index);
			});
		}
	});
}

// 打开开卡页
function openActiveCard(guid) {
	var html = [
			'<table class="tablebgcolor" cellspacing="1" cellpadding="2" width="100%" align="center" border="0">',
			'<tbody>',
			'<tr>',
			'<td class="lefttdbgcolor" style="width: 30%;"><font color="#ff0000">*</font>开卡时间：</td>',
			'<td class="tdbgcolor" style="width: 70%;"><input class="Wdate form-activetime"',
			' onclick="WdatePicker({ dateFmt: \'yyyy-MM-dd HH:mm:ss\' })" /></td>',
			'</tr>',
			'<tr>',
			'<td class="lefttdbgcolor" style="width: 30%;"><font color="#ff0000">*</font>到期日期：</td>',
			'<td class="tdbgcolor" style="width: 70%;"><input class="Wdate form-expiretime"',
			' onclick="WdatePicker({ dateFmt: \'yyyy-MM-dd\' })" /></td>',
			'</tr>',
			'<tr>',
			'<td class="lefttdbgcolor" style="width: 30%;"><font color="#ff0000">*</font>备注说明：</td>',
			'<td class="tdbgcolor" style="width: 70%;"><textarea class="form-content" style="width: 100%;" rows="4" cols="10"></textarea></td>',
			'</tr>', '</tbody>', '</table>' ].join('');
	layer.open({
		type : 1,
		title : '开卡',
		shade : [ 0.6, '#F5F5F5' ],
		area : [ '400px', '250px' ],
		btn : [ '开卡', '关闭' ],
		content : html,
		success : function(layero, index) {
		},
		yes : function(index, layero) {
			var activetime = layero.find('.form-activetime').val();
			var expiretime = layero.find('.form-expiretime').val();
			var content = layero.find('.form-content').val();

			if (activetime === "") {
				layer.alert('开卡时间必填！');
				return;
			} else if (!activetime.isDateTime()) {
				layer.alert('开卡时间格式不正确！');
				return;
			}
			if (expiretime === "") {
				layer.alert('到期日期必填！');
				return;
			} else if (!expiretime.isDate()) {
				layer.alert('到期日期格式不正确！');
				return;
			}
			if (content === "") {
				layer.alert('备注说明必填！');
				return;
			}

			$.post("activeCard", {
				"guid" : guid,
				"activetime" : activetime,
				"expiretime" : expiretime,
				"content" : content
			}, function(data) {
				var ret = eval('(' + data + ')');
				if (ret.success) {
					window.location.reload();
				} else {
					layer.alert('开卡失败！');
				}

				layer.close(index);
			});
		}
	});
}

// 打开续卡页
function openContinueCard(guid) {
	var html = [
			'<table class="tablebgcolor" cellspacing="1" cellpadding="2" width="100%" align="center" border="0">',
			'<tbody>',
			'<tr>',
			'<td class="lefttdbgcolor" style="width: 30%;"><font color="#ff0000">*</font>消费金额：</td>',
			'<td class="tdbgcolor" style="width: 70%;"><input class="str form-money" /></td>',
			'</tr>',
			'<tr>',
			'<td class="lefttdbgcolor" style="width: 30%;"><font color="#ff0000">*</font>到期日期：</td>',
			'<td class="tdbgcolor" style="width: 70%;"><input class="Wdate form-expiretime"',
			' onclick="WdatePicker({ dateFmt: \'yyyy-MM-dd\' })" /></td>',
			'</tr>',
			'<tr>',
			'<td class="lefttdbgcolor" style="width: 30%;"><font color="#ff0000">*</font>备注说明：</td>',
			'<td class="tdbgcolor" style="width: 70%;"><textarea class="form-content" style="width: 100%;" rows="4" cols="10"></textarea></td>',
			'</tr>', '</tbody>', '</table>' ].join('');
	layer.open({
		type : 1,
		title : '续卡',
		shade : [ 0.6, '#F5F5F5' ],
		area : [ '400px', '250px' ],
		btn : [ '续卡', '关闭' ],
		content : html,
		success : function(layero, index) {
			layero.find('.form-money').focus();
		},
		yes : function(index, layero) {
			var money = layero.find('.form-money').val();
			var expiretime = layero.find('.form-expiretime').val();
			var content = layero.find('.form-content').val();

			if (money === "") {
				layer.alert('充值金额必填！');
				return;
			} else if (!money.isPlus()) {
				layer.alert('充值金额需要是正数！');
				return;
			}
			if (expiretime === "") {
				layer.alert('到期日期必填！');
				return;
			} else if (!expiretime.isDate()) {
				layer.alert('到期日期格式不正确！');
				return;
			}
			if (content === "") {
				layer.alert('备注说明必填！');
				return;
			}

			$.post("continueCard", {
				"guid" : guid,
				"money" : money,
				"expiretime" : expiretime,
				"content" : content
			}, function(data) {
				var ret = eval('(' + data + ')');
				if (ret.success) {
					window.location.reload();
				} else {
					layer.alert('续卡失败！');
				}

				layer.close(index);
			});
		}
	});
}
