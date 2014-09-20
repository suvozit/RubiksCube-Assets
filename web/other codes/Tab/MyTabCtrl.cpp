// IbTabCtrl.cpp : implementation file
//

#include "stdafx.h"
#include "MyTabCtrl.h"

// CMyTabCtrl

IMPLEMENT_DYNAMIC(CMyTabCtrl, CTabCtrl)
CMyTabCtrl::CMyTabCtrl()
{
	m_prevPage = 0;
}

CMyTabCtrl::~CMyTabCtrl()
{
}


BEGIN_MESSAGE_MAP(CMyTabCtrl, CTabCtrl)
	ON_NOTIFY_REFLECT(TCN_SELCHANGE, OnTcnSelchange)
	ON_WM_SHOWWINDOW()
END_MESSAGE_MAP()

// CIbTabCtrl message handlers
void CMyTabCtrl::addNewPage(CString strPage, CWnd * pPage)
{
	this->InsertItem(this->GetItemCount(),strPage);  
	pPage->ShowWindow(SW_HIDE); 
	m_pages.Add(pPage); 
}

void CMyTabCtrl::OnTcnSelchange(NMHDR *pNMHDR, LRESULT *pResult)
{
	// TODO: Add your control notification handler code here
	CWnd *pPage;
	int iCurrent;
	iCurrent = this->GetCurFocus();

	if(iCurrent != m_prevPage)
	{
		pPage = m_pages.GetAt(iCurrent);
		setPage(pPage);
	}

	m_prevPage = iCurrent;
}

void CMyTabCtrl::setPage(CWnd* pWnd)
{
	m_pages.GetAt(m_prevPage)->ShowWindow(SW_HIDE);

	CRect tabRect, itemRect;
	int nX, nY, nXc, nYc;

	GetClientRect(&tabRect);
	GetItemRect(0, &itemRect);

	nX=itemRect.left;
	nY=itemRect.bottom+1;
	nXc=tabRect.right-itemRect.left-1;
	nYc=tabRect.bottom-nY-1;
	pWnd->SetWindowPos(&wndTop, nX, nY, nXc, nYc, SWP_SHOWWINDOW);
}

void CMyTabCtrl::setDefaultPage(int iIndex)
{
	CWnd *pPage;
	m_prevPage = iIndex;
	if(iIndex >=0 && iIndex < m_pages.GetCount())
	{
		pPage = m_pages.GetAt(iIndex);
		setPage(pPage);
	}
}
