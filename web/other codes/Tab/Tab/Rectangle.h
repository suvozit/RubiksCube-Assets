#pragma once
#include "RESOURCE.h"

// CRectangle dialog

class CRectangle : public CPropertyPage
{
	DECLARE_DYNAMIC(CRectangle)

public:
	CRectangle();
	virtual ~CRectangle();

// Dialog Data
	enum { IDD = IDD_RECT_DIALOG };

protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support

	DECLARE_MESSAGE_MAP()
};
