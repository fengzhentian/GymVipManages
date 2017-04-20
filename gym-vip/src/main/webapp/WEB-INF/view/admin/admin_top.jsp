<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>    
<%@ include file="/WEB-INF/support/include.inc.jsp"%>

<c:set var="ctx" value="${pageContext.request.contextPath}" />
<link rel="stylesheet" type="text/css" href="${ctx}/deco/north.css">

<table width="100%" border="0" cellspacing="0" cellpadding="0"
	style="background-repeat: repeat-x; background-image: url('${ctx}/deco/img/header9.jpg');">
	<tr>
		<td rowspan="2" width="70%"><img border="0" src="${ctx}/deco/img/header1.jpg"></td>
		<td width="30%" height="45"></td>
	</tr>
	<tr width="100%">
		<td align="right">
			<font color="#000000" size="2">
				<span style="white-space: nowrap; padding-right: 20px;">【${contextUser.userName}】您好！<a href="${ctx}/logout">【注销】</a></span>
			</font>
		</td>
	</tr>
</table>
