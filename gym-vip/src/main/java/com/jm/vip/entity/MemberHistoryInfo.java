package com.jm.vip.entity;

import java.util.Date;

public class MemberHistoryInfo
{
	private String guid;

	private String cardnumber;

	private String cardtype;

	private Date activetime;

	private Date expiretime;

	private Double balance;

	private Double consumption;

	private Integer points;

	private Integer times;

	private Integer usedtimes;

	private String fullname;

	private String sex;

	private String nationality;

	private String identitycard;

	private Date birthday;

	private String mobile;

	private Short status;// 状态 0：正常，1：删除

	private Date createtime;

	private String creator;

	private String creatorid;

	public String getGuid()
	{
		return guid;
	}

	public void setGuid(String guid)
	{
		this.guid = guid;
	}

	public String getCardnumber()
	{
		return cardnumber;
	}

	public void setCardnumber(String cardnumber)
	{
		this.cardnumber = cardnumber == null ? null : cardnumber.trim();
	}

	public String getCardtype()
	{
		return cardtype;
	}

	public void setCardtype(String cardtype)
	{
		this.cardtype = cardtype == null ? null : cardtype.trim();
	}

	public Date getActivetime()
	{
		return activetime;
	}

	public void setActivetime(Date activetime)
	{
		this.activetime = activetime;
	}

	public Date getExpiretime()
	{
		return expiretime;
	}

	public void setExpiretime(Date expiretime)
	{
		this.expiretime = expiretime;
	}

	public Double getBalance()
	{
		return balance;
	}

	public void setBalance(Double balance)
	{
		this.balance = balance;
	}

	public Double getConsumption()
	{
		return consumption;
	}

	public void setConsumption(Double consumption)
	{
		this.consumption = consumption;
	}

	public Integer getPoints()
	{
		return points;
	}

	public void setPoints(Integer points)
	{
		this.points = points;
	}

	public Integer getTimes()
	{
		return times;
	}

	public void setTimes(Integer times)
	{
		this.times = times;
	}

	public Integer getUsedtimes()
	{
		return usedtimes;
	}

	public void setUsedtimes(Integer usedtimes)
	{
		this.usedtimes = usedtimes;
	}

	public String getFullname()
	{
		return fullname;
	}

	public void setFullname(String fullname)
	{
		this.fullname = fullname == null ? null : fullname.trim();
	}

	public String getSex()
	{
		return sex;
	}

	public void setSex(String sex)
	{
		this.sex = sex == null ? null : sex.trim();
	}

	public String getNationality()
	{
		return nationality;
	}

	public void setNationality(String nationality)
	{
		this.nationality = nationality == null ? null : nationality.trim();
	}

	public String getIdentitycard()
	{
		return identitycard;
	}

	public void setIdentitycard(String identitycard)
	{
		this.identitycard = identitycard == null ? null : identitycard.trim();
	}

	public Date getBirthday()
	{
		return birthday;
	}

	public void setBirthday(Date birthday)
	{
		this.birthday = birthday;
	}

	public String getMobile()
	{
		return mobile;
	}

	public void setMobile(String mobile)
	{
		this.mobile = mobile == null ? null : mobile.trim();
	}

	public Short getStatus()
	{
		return status;
	}

	public void setStatus(Short status)
	{
		this.status = status;
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