<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="header_login.jsp"%>

</head>
<body>
	<script type="text/javascript">
		$(function() {
			$.ajax({
				type : "POST",
				url : "addTeam.action",
				dataType : "JSON",
				success : function() {
					if (data.code == 1) {
						
					} else {
					
					}
				}
			})
		})
		
	
	
	
	</script>
	<form>
		<table>
			<tr>
				<td>联赛:</td>
				<td><select id="league_list">
				</select></td>
			</tr>
		</table>
	</form>
</body>
</html>