// TabDlg.cpp : implementation file
//

#include "stdafx.h"
#include "Tab.h"
#include "TabDlg.h"

#ifdef _DEBUG
#define new DEBUG_NEW
#endif


// CTabDlg dialog




CTabDlg::CTabDlg(CWnd* pParent /*=NULL*/)
	: CDialog(CTabDlg::IDD, pParent)
{
	m_hIcon = AfxGetApp()->LoadIcon(IDR_MAINFRAME);
}

void CTabDlg::DoDataExchange(CDataExchange* pDX)
{
	CDialog::DoDataExchange(pDX);
	DDX_Control(pDX, IDC_TAB1, m_CtrlTab);
	//DDX_Control(pDX, IDC_TAB1, m_MyTabCtrl);
}

BEGIN_MESSAGE_MAP(CTabDlg, CDialog)
	ON_WM_PAINT()
	ON_WM_QUERYDRAGICON()
	//}}AFX_MSG_MAP
END_MESSAGE_MAP()


// CTabDlg message handlers

BOOL CTabDlg::OnInitDialog()
{
	CDialog::OnInitDialog();

	// Set the icon for this dialog.  The framework does this automatically
	//  when the application's main window is not a dialog
	SetIcon(m_hIcon, TRUE);			// Set big icon
	SetIcon(m_hIcon, FALSE);		// Set small icon

	// TODO: Add extra initialization here
	m_RectDlg.Create(IDD_RECT_DIALOG, &m_CtrlTab);
	m_OvalDlg.Create(IDD_OVAL_DIALOG, &m_CtrlTab);

	m_CtrlTab.addNewPage(L"My Page Rect", &m_RectDlg);
	m_CtrlTab.addNewPage(L"My Page Oval", &m_OvalDlg);

	m_CtrlTab.setDefaultPage(0);

	//m_MyTabCtrl.InsertItem(0, _T("Tab One"));
	//m_MyTabCtrl.InsertItem(1, _T("Tab Two"));

	//m_MyTabCtrl.Init();

	return TRUE;  // return TRUE  unless you set the focus to a control
}

// If you add a minimize button to your dialog, you will need the code below
//  to draw the icon.  For MFC applications using the document/view model,
//  this is automatically done for you by the framework.

void CTabDlg::OnPaint()
{
	if (IsIconic())
	{
		CPaintDC dc(this); // device context for painting

		SendMessage(WM_ICONERASEBKGND, reinterpret_cast<WPARAM>(dc.GetSafeHdc()), 0);

		// Center icon in client rectangle
		int cxIcon = GetSystemMetrics(SM_CXICON);
		int cyIcon = GetSystemMetrics(SM_CYICON);
		CRect rect;
		GetClientRect(&rect);
		int x = (rect.Width() - cxIcon + 1) / 2;
		int y = (rect.Height() - cyIcon + 1) / 2;

		// Draw the icon
		dc.DrawIcon(x, y, m_hIcon);
	}
	else
	{
		CDialog::OnPaint();
	}
}

// The system calls this function to obtain the cursor to display while the user drags
//  the minimized window.
HCURSOR CTabDlg::OnQueryDragIcon()
{
	return static_cast<HCURSOR>(m_hIcon);
}

