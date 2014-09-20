#pragma once


// COvalBoxDlg dialog

class COvalBoxDlg : public CDialog
{
	DECLARE_DYNAMIC(COvalBoxDlg)

public:
	COvalBoxDlg(CWnd* pParent = NULL);   // standard constructor
	virtual ~COvalBoxDlg();

// Dialog Data
	enum { IDD = IDD_OVAL_DIALOG };

protected:
	virtual void DoDataExchange(CDataExchange* pDX);    // DDX/DDV support

	DECLARE_MESSAGE_MAP()
};
