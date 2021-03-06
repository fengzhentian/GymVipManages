<%@ page contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" language="java"%>
<%@ include file="/WEB-INF/support/include.inc.jsp"%>
<!DOCTYPE html>
<html xmlns=http://www.w3.org/1999/xhtml>
<head>
<c:import url="/WEB-INF/support/meta.jsp"></c:import>
<title>购买次数记录管理</title>

<%@ include file="/WEB-INF/support/common.jsp"%>

<script type="text/javascript" src="${ctx}/deco/datagrid/grid.js${res_v}"></script>
<script type="text/javascript" src="${ctx}/deco/dateformat.js${res_v}"></script>
<script type="text/javascript" src="${ctx}/business/record/buycardnumberrecord/list.js${res_v}"></script>
<script type="text/javascript" src="${ctx}/business/record/buycardnumberrecord/buycardnumberrecord.js${res_v}"></script>
</head>

<body>
	<!-- 列表页菜单栏 -->
	<ywbar:listBar/>

    <!-- 购买次数记录列表页 -->
	<table id="grid" style="width: getWidth(1); height: 100%" >
		<thead>	
			<tr>
				<th data-options="field:'ck',checkbox:true"></th>
				<th data-options="field:'money',align:'left',formatter:getMoneyUrl,sortable:true,order:'desc'" width="25">消费金额</th>
				<th data-options="field:'number',align:'left',formatter:getIntegerUrl,sortable:true,order:'desc'" width="25">购买次数</th>
				<th data-options="field:'expiretime',align:'left',formatter:getShortDateUrl,sortable:true,order:'desc'" width="25">到期日期</th>
				<th data-options="field:'createtime',align:'left',formatter:getDateUrl,sortable:true,order:'desc'" width="25">购买时间</th>
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
				columnSize : 5
			});
		});
	</script>
</body>
</html>