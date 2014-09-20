#pragma once

// CMyTabCtrl

class CMyTabCtrl : public CTabCtrl
{
	DECLARE_DYNAMIC(CMyTabCtrl)

private: 
	CArray<CWnd*,CWnd*> m_pages;
	void setPage(CWnd* pWnd);
	int  m_prevPage;

public:
	CMyTabCtrl();
	virtual ~CMyTabCtrl();

protected:
	DECLARE_MESSAGE_MAP()
public:
	void addNewPage(CString strPage, CWnd *pPage);
	void setDefaultPage(int iIndex = 0);

	afx_msg void OnTcnSelchange(NMHDR *pNMHDR, LRESULT *pResult);
};


