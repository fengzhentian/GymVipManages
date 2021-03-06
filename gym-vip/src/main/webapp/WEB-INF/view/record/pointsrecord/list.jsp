<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" language="java"%>
<%@ include file="/WEB-INF/support/include.inc.jsp"%>
<!DOCTYPE html>
<html xmlns=http://www.w3.org/1999/xhtml>
<head>
<c:import url="/WEB-INF/support/meta.jsp"></c:import>
<title>积分记录管理</title>

<%@ include file="/WEB-INF/support/common.jsp"%>

<script type="text/javascript" src="${ctx}/deco/datagrid/grid.js${res_v}"></script>
<script type="text/javascript" src="${ctx}/deco/dateformat.js${res_v}"></script>
<script type="text/javascript" src="${ctx}/business/record/pointsrecord/list.js${res_v}"></script>
<script type="text/javascript" src="${ctx}/business/record/pointsrecord/pointsrecord.js${res_v}"></script>
</head>

<body>
	<!-- 列表页菜单栏 -->
	<ywbar:listBar/>

    <!-- 积分记录列表页 -->
	<table id="grid" style="width: getWidth(1); height: 100%" >
		<thead>	
			<tr>
				<th data-options="field:'ck',checkbox:true"></th>
				<th data-options="field:'pointtype',align:'left',formatter:getPointsTypeUrl,sortable:true,order:'desc'"
					width="20">类型</th>
				<th data-options="field:'points',align:'left',formatter:getPointsUrl,sortable:true,order:'desc'"
					width="20">积分</th>
				<th data-options="field:'createtime',align:'left',formatter:getDateUrl,sortable:true,order:'desc'"
					width="30">操作时间</th>
			</tr>
		</thead>
	</table>

	<ywtag:dialog/>

	<script type="text/javascript">
		/* 初始化列表基本属性 */
		(function(win){
			var gridData = {};

			// 默认的条件
			gridData.defaultParam = {
				'memberguid' : '${memberguid}'
			};
			// 默认的查询参数
			gridData.defaultQueryParams = {
				"params" : JSON.stringify(gridData.defaultParam),
				'mapperid' : '${mapperid}'
			};

			win.gridData = gridData;
		})(window);

		// 初始化列表基本属性
		$(function() {
			// 加载数据
			ywGrid.loadGrid({
				columnSize : 3
			});
		});
	</script>
</body>
</html>