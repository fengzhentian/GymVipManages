package com.jm.vip.entity;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

/**
 * 充值记录
 */
public class ChargeRecord
{
	/**
	 * 充值唯一标识
	 */
	private String guid;
	/**
	 * 会员唯一标识
	 */
	private String memberguid;
	/**
	 * 充值金额
	 */
	private Double money;
	/**
	 * 原始卡内余额
	 */
	private Double oldbalance;
	/**
	 * 现在卡内余额
	 */
	private Double newbalance;
	/**
	 * 备注说明
	 */
	private String remark;
	/**
	 * 记录时间
	 */
	@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
	private Date createtime;
	/**
	 * 操作人
	 */
	private String creator;
	/**
	 * 操作人唯一标识
	 */
	private String creatorid;

	public String getGuid()
	{
		return guid;
	}

	public void setGuid(String guid)
	{
		this.guid = guid;
	}

	public String getMemberguid()
	{
		return memberguid;
	}

	public void setMemberguid(String memberguid)
	{
		this.memberguid = memberguid;
	}

	public Double getMoney()
	{
		return money;
	}

	public void setMoney(Double money)
	{
		this.money = money;
	}

	public Double getOldbalance()
	{
		return oldbalance;
	}

	public void setOldbalance(Double oldbalance)
	{
		this.oldbalance = oldbalance;
	}

	public Double getNewbalance()
	{
		return newbalance;
	}

	public void setNewbalance(Double newbalance)
	{
		this.newbalance = newbalance;
	}

	public String getRemark()
	{
		return remark;
	}

	public void setRemark(String remark)
	{
		this.remark = remark == null ? null : remark.trim();
	}

	public Date getCreatetime()
	{
		return createtime;
	}

	public void setCreatetime(Date createtime)
	{
		this.createtime = createtime;
	}

	public String getCreator()
	{
		return creator;
	}

	public void setCreator(String creator)
	{
		this.creator = creator == null ? null : creator.trim();
	}

	public String getCreatorid()
	{
		return creatorid;
	}

	public void setCreatorid(String creatorid)
	{
		this.creatorid = creatorid == null ? null : creatorid.trim();
	}
}