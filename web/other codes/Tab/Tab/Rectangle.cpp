// Rectangle.cpp : implementation file
//

#include "stdafx.h"
#include "Tab.h"
#include "Rectangle.h"


// CRectangle dialog

IMPLEMENT_DYNAMIC(CRectangle, CPropertyPage)

CRectangle::CRectangle()
	: CPropertyPage(CRectangle::IDD)
{

}

CRectangle::~CRectangle()
{
}

void CRectangle::DoDataExchange(CDataExchange* pDX)
{
	CPropertyPage::DoDataExchange(pDX);
}


BEGIN_MESSAGE_MAP(CRectangle, CPropertyPage)
END_MESSAGE_MAP()


// CRectangle message handlers
