// TabDlg.h : header file
//

#pragma once

#include "Rectangle.h"
#include "OvalBoxDlg.h"
#include "IbTabCtrl.h"
#include "MyTabCtrl.h"

// CTabDlg dialog
class CTabDlg : public CDialog
{
// Construction
public:
	CTabDlg(CWnd* pParent = NULL);	// standard constructor

// Dialog Data
	enum { IDD = IDD_TAB_DIALOG };

	protected:
	virtual void DoDataExchange(CDataExchange* pDX);	// DDX/DDV support

private:
	CRectangle m_RectDlg;
	COvalBoxDlg   m_OvalDlg;
	CIbTabCtrl m_CtrlTab;
	CMyTabCtrl m_MyTabCtrl;
	CTabCtrl m_TabCtrl;

// Implementation
protected:
	HICON m_hIcon;

	// Generated message map functions
	virtual BOOL OnInitDialog();
	afx_msg void OnPaint();
	afx_msg HCURSOR OnQueryDragIcon();
	DECLARE_MESSAGE_MAP()
};
