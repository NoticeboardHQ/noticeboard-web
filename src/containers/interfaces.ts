export interface ComplaintProps {
  tenantNumber: number
  tenantAddress: string
  message: string
  created_at: string
  level: string
  resolved: boolean
}

export interface AssignComplaintModalProps {
  showModal: boolean
  onHide: () => void
  complaint?: ComplaintProps
}
